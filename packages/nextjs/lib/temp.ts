import {
  getAccountNonce,
  getEntryPointVersion,
  getSenderAddress,
  getUserOperationHash,
  isSmartAccountDeployed,
} from "permissionless";
import type { ENTRYPOINT_ADDRESS_V06_TYPE, ENTRYPOINT_ADDRESS_V07_TYPE, EntryPoint } from "permissionless/_types/types";
import {
  SignTransactionNotSupportedBySmartAccount,
  type SmartAccount,
  type SmartAccountSigner,
  toSmartAccount,
} from "permissionless/accounts";
import {
  type Address,
  type Chain,
  type Client,
  type Hex,
  type LocalAccount,
  type Transport,
  concatHex,
  encodeFunctionData,
} from "viem";
import { getChainId, signMessage } from "viem/actions";
import type { Prettify } from "viem/chains";
import { TimelockBountySmartWalletFactoryAbi } from "~~/abi/TimelockBountySmartWalletFactory";

export type SimpleSmartAccount<
  entryPoint extends EntryPoint,
  transport extends Transport = Transport,
  chain extends Chain | undefined = Chain | undefined,
> = SmartAccount<entryPoint, "SimpleSmartAccount", transport, chain>;

const getAccountInitCode = async (
  owners: Address[],
  ownerIndex: bigint,
  deadline: bigint,
  bountyToken: Address,
  nonce = BigInt(0),
): Promise<Hex> => {
  if (!owners.length) throw new Error("Owner account not found");

  return encodeFunctionData({
    abi: TimelockBountySmartWalletFactoryAbi.abi,
    functionName: "createAccount",
    args: [owners, ownerIndex, deadline, nonce, bountyToken],
  });
};

const getAccountAddress = async <
  entryPoint extends EntryPoint,
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>({
  client,
  factoryAddress,
  entryPoint: entryPointAddress,
  owners,
  ownerIndex,
  deadline,
  bountyToken,
  index = BigInt(0),
}: {
  client: Client<TTransport, TChain>;
  factoryAddress: Address;
  owners: Address[];
  ownerIndex: bigint;
  deadline: bigint;
  bountyToken: Address;
  index?: bigint;
  entryPoint: entryPoint;
}): Promise<Address> => {
  const entryPointVersion = getEntryPointVersion(entryPointAddress);

  const factoryData = await getAccountInitCode(owners, ownerIndex, deadline, bountyToken, index);

  if (entryPointVersion === "v0.6") {
    return getSenderAddress<ENTRYPOINT_ADDRESS_V06_TYPE>(client, {
      initCode: concatHex([factoryAddress, factoryData]),
      entryPoint: entryPointAddress as ENTRYPOINT_ADDRESS_V06_TYPE,
    });
  }

  // Get the sender address based on the init code
  return getSenderAddress<ENTRYPOINT_ADDRESS_V07_TYPE>(client, {
    factory: factoryAddress,
    factoryData,
    entryPoint: entryPointAddress as ENTRYPOINT_ADDRESS_V07_TYPE,
  });
};

export type SignerToSimpleSmartAccountParameters<
  entryPoint extends EntryPoint,
  TSource extends string = string,
  TAddress extends Address = Address,
> = Prettify<{
  signer: SmartAccountSigner<TSource, TAddress>;
  factoryAddress: Address;
  owners: Address[];
  ownerIndex: bigint;
  deadline: bigint;
  bountyToken: Address;
  entryPoint: entryPoint;
  index?: bigint;
  address?: Address;
}>;

/**
 * @description Creates an Simple Account from a private key.
 *
 * @returns A Private Key Simple Account.
 */
export async function signerToTimelockSmartAccount<
  entryPoint extends EntryPoint,
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
  TSource extends string = string,
  TAddress extends Address = Address,
>(
  client: Client<TTransport, TChain, undefined>,
  {
    signer,
    factoryAddress,
    entryPoint: entryPointAddress,
    owners,
    ownerIndex,
    deadline,
    bountyToken,
    index = BigInt(0),
    address,
  }: SignerToSimpleSmartAccountParameters<entryPoint, TSource, TAddress>,
): Promise<SimpleSmartAccount<entryPoint, TTransport, TChain>> {
  const viemSigner: LocalAccount = {
    ...signer,
    signTransaction: (_, __) => {
      throw new SignTransactionNotSupportedBySmartAccount();
    },
  } as LocalAccount;

  const [accountAddress, chainId] = await Promise.all([
    address ??
      getAccountAddress<entryPoint, TTransport, TChain>({
        client,
        factoryAddress,
        entryPoint: entryPointAddress,
        owners,
        ownerIndex,
        deadline,
        bountyToken,
        index,
      }),
    client.chain?.id ?? getChainId(client),
  ]);

  if (!accountAddress) throw new Error("Account address not found");

  let smartAccountDeployed = await isSmartAccountDeployed(client, accountAddress);

  return toSmartAccount({
    address: accountAddress,
    signMessage: async _ => {
      throw new Error("Simple account isn't 1271 compliant");
    },
    signTransaction: (_, __) => {
      throw new SignTransactionNotSupportedBySmartAccount();
    },
    signTypedData: async _ => {
      throw new Error("Simple account isn't 1271 compliant");
    },
    client: client,
    publicKey: accountAddress,
    entryPoint: entryPointAddress,
    source: "SimpleSmartAccount",
    async getNonce() {
      return getAccountNonce(client, {
        sender: accountAddress,
        entryPoint: entryPointAddress,
      });
    },
    async signUserOperation(userOperation) {
      return signMessage(client, {
        account: viemSigner,
        message: {
          raw: getUserOperationHash({
            userOperation,
            entryPoint: entryPointAddress,
            chainId: chainId,
          }),
        },
      });
    },
    async getInitCode() {
      if (smartAccountDeployed) return "0x";

      smartAccountDeployed = await isSmartAccountDeployed(client, accountAddress);

      if (smartAccountDeployed) return "0x";

      return concatHex([factoryAddress, await getAccountInitCode(owners, ownerIndex, deadline, bountyToken, index)]);
    },
    async getFactory() {
      if (smartAccountDeployed) return undefined;
      smartAccountDeployed = await isSmartAccountDeployed(client, accountAddress);
      if (smartAccountDeployed) return undefined;
      return factoryAddress;
    },
    async getFactoryData() {
      if (smartAccountDeployed) return undefined;
      smartAccountDeployed = await isSmartAccountDeployed(client, accountAddress);
      if (smartAccountDeployed) return undefined;
      return getAccountInitCode(owners, ownerIndex, deadline, bountyToken, index);
    },
    async encodeDeployCallData(_) {
      throw new Error("Simple account doesn't support account deployment");
    },
    async encodeCallData(args) {
      console.log({ args });
      if (Array.isArray(args)) {
        const argsArray = args as {
          to: Address;
          value: bigint;
          data: Hex;
        }[];

        if (getEntryPointVersion(entryPointAddress) === "v0.6") {
          return encodeFunctionData({
            abi: [
              {
                inputs: [
                  {
                    internalType: "address[]",
                    name: "dest",
                    type: "address[]",
                  },
                  {
                    internalType: "bytes[]",
                    name: "func",
                    type: "bytes[]",
                  },
                ],
                name: "executeBatch",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            functionName: "executeBatch",
            args: [argsArray.map(a => a.to), argsArray.map(a => a.data)],
          });
        }
        return encodeFunctionData({
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "dest",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "func",
                  type: "bytes[]",
                },
              ],
              name: "executeBatch",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          functionName: "executeBatch",
          args: [argsArray.map(a => a.to), argsArray.map(a => a.value), argsArray.map(a => a.data)],
        });
      }

      const { to, value, data } = args as {
        to: Address;
        value: bigint;
        data: Hex;
      };

      return encodeFunctionData({
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "dest",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "func",
                type: "bytes",
              },
            ],
            name: "execute",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "execute",
        args: [to, value, data],
      });
    },
    async getDummySignature(_userOperation) {
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    },
  });
}

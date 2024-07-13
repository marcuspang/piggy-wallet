/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ERC20_ABI, ERC20_CROSSCHAIN_TRANSFER_ABI } from "./ABI";
import { CROSSCHAIN_TRANSFER_CONTRACT_BASE_SEPOLIA } from "./constants";
import {
  type UserOperation,ENTRYPOINT_ADDRESS_V07,
  createSmartAccountClient,
  getSenderAddress,
  signUserOperationHashWithECDSA,
  walletClientToSmartAccountSigner,
} from "permissionless";
import { signerToSimpleSmartAccount } from "permissionless/accounts";
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import {
  type Address,
  Chain,
  type Hex,
  type PublicClient,
  WalletClient,
  createPublicClient,
  encodeFunctionData,
  http,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import { TimelockBountySmartWalletAbi } from "~~/abi/TimelockBountySmartWallet";
import { signerToTimelockSmartAccount } from "~~/lib/temp";

const SIMPLE_ACCOUNT_FACTORY_ADDRESS = process.env.NEXT_PUBLIC_SIMPLE_ACCOUNT_FACTORY_ADDRESS as Address;
if (!SIMPLE_ACCOUNT_FACTORY_ADDRESS) {
  throw new Error("NEXT_PUBLIC_SIMPLE_ACCOUNT_FACTORY_ADDRESS is not set");
}

const paymasterTransportUrl = (chain: Chain) =>
  `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`;

export const publicClient = (chain: Chain) =>
  createPublicClient({
    transport: http(chain?.rpcUrls.default.http[0].toString()),
  });

export const paymasterClient = (chain: Chain) =>
  createPimlicoPaymasterClient({
    transport: http(paymasterTransportUrl(chain)),
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });

export const pimlicoBundlerClient = (chain: Chain) =>
  createPimlicoBundlerClient({
    transport: http(paymasterTransportUrl(chain)),
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });

export const getPimlicoSmartAccountClient = async (
  address: `0x${string}`,
  chain: Chain,
  walletClient: WalletClient, //-> wallet: EmbeddedWalletState
) => {
  const signer = walletClientToSmartAccountSigner(walletClient as any);
  console.log({ signer });

  const safeSmartAccountClient = await signerToTimelockSmartAccount(publicClient(chain), {
    entryPoint: ENTRYPOINT_ADDRESS_V07,
    signer: signer,
    factoryAddress: "0xda5f43c7732215f6d43c7d3e9f5bc6bfd658947e",
    owners: [signer.address],
    ownerIndex: BigInt(0),
    deadline: BigInt(0),
    bountyToken: "0x036cbd53842c5426634e7929541ec2318f3dcf7e",
  });
  console.log({ safeSmartAccountClient });

  return createSmartAccountClient({
    account: safeSmartAccountClient,
    entryPoint: ENTRYPOINT_ADDRESS_V07,
    chain,
    bundlerTransport: http(paymasterTransportUrl(chain)),
    middleware: {
      gasPrice: async () => (await pimlicoBundlerClient(chain).getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
      sponsorUserOperation: paymasterClient(chain).sponsorUserOperation, // optional
    },
  });
};

export const generateSmartAccountFactoryData = (
  owners: Hex[],
  ownerIndex: number,
  deadline: number,
  nonce: number,
  bountyToken: Address,
) => {
  return encodeFunctionData({
    abi: [
      {
        type: "function",
        name: "createAccount",
        inputs: [
          {
            name: "owners",
            type: "bytes[]",
            internalType: "bytes[]",
          },
          {
            name: "ownerIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "bountyToken",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          {
            name: "account",
            type: "address",
            internalType: "contract TimelockBountySmartWallet",
          },
        ],
        stateMutability: "payable",
      },
    ],
    args: [owners, BigInt(ownerIndex), BigInt(deadline), BigInt(nonce), bountyToken],
  });
};

const owner = privateKeyToAccount("0x52dfe62be2d40ecb3d063eeae5a2bb41be0e19a76e4249cad525f4e92d3180df");

// export const getSmartAccountSenderAddress = async (
//   publicClient: PublicClient,
//   owners: Hex[],
//   ownerIndex: number,
//   deadline: number,
//   nonce: number,
//   bountyToken: Address,
// ) => {
//   return await getSenderAddress(publicClient, {
//     factory: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
//     factoryData:
//       "0x3ef485bc00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001" as Hex,
//     // factoryData: generateSmartAccountFactoryData(owners, ownerIndex, deadline, nonce, bountyToken),
//     entryPoint: ENTRYPOINT_ADDRESS_V07,
//   });
// };

const to = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // vitalik
const value = 0n;

const callData = encodeFunctionData({
  abi: [
    {
      inputs: [
        { name: "dest", type: "address" },
        { name: "value", type: "uint256" },
        { name: "func", type: "bytes" },
      ],
      name: "execute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  args: [
    to,
    value,
    encodeFunctionData({
      abi: TimelockBountySmartWalletAbi.abi,
      functionName: "unlock",
    }),
  ],
});

console.log("Generated callData:", callData);

// export const sendUserOp = async () => {
//   const gasPrice = await pimlicoBundlerClient(baseSepolia).getUserOperationGasPrice();

//   const owners = [owner.address, "0x8A322f00b1097D343C824ff1BBcB2A78Be50C2D7" as Address];
//   const ownerIndex = 0;
//   const deadline = 0;
//   const nonce = 0;
//   const bountyToken = "0x036cbd53842c5426634e7929541ec2318f3dcf7e";

//   const userOperation = {
//     sender: await getSmartAccountSenderAddress(
//       publicClient(baseSepolia),
//       owners,
//       ownerIndex,
//       deadline,
//       nonce,
//       bountyToken,
//     ),
//     nonce: 0n,
//     factory: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
//     factoryData:
//       "0x3ef485bc00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001" as Hex,
//     // factoryData: generateSmartAccountFactoryData(owners, ownerIndex, deadline, nonce, bountyToken),
//     callData,
//     maxFeePerGas: gasPrice.fast.maxFeePerGas,
//     maxPriorityFeePerGas: gasPrice.fast.maxPriorityFeePerGas,
//     // dummy signature, needs to be there so the SimpleAccount doesn't immediately revert because of invalid signature length
//     signature:
//       "0xa15569dd8f8324dbeabf8073fdec36d4b754f53ce5901e283c6de79af177dc94557fa3c9922cd7af2a96ca94402d35c39f266925ee6407aeb32b31d76978d4ba1c" as Hex,
//   };

//   console.log({ userOperation });

//   const sponsorUserOperationResult = await paymasterClient(baseSepolia).sponsorUserOperation({
//     userOperation,
//   });

//   const sponsoredUserOperation: UserOperation<"v0.7"> = {
//     ...userOperation,
//     ...sponsorUserOperationResult,
//   };

//   console.log("Received paymaster sponsor result:", sponsorUserOperationResult);

//   const signature = await signUserOperationHashWithECDSA({
//     account: owner,
//     userOperation: sponsoredUserOperation,
//     chainId: baseSepolia.id,
//     entryPoint: ENTRYPOINT_ADDRESS_V07,
//   });
//   sponsoredUserOperation.signature = signature;

//   console.log("Generated signature:", signature);

//   const userOperationHash = await pimlicoBundlerClient(baseSepolia).sendUserOperation({
//     userOperation: sponsoredUserOperation,
//   });

//   console.log("Received User Operation hash:", userOperationHash);

//   // let's also wait for the userOperation to be included, by continually querying for the receipts
//   console.log("Querying for receipts...");
//   const receipt = await pimlicoBundlerClient(baseSepolia).waitForUserOperationReceipt({
//     hash: userOperationHash,
//   });
//   const txHash = receipt.receipt.transactionHash;
//   console.log({ txHash });
// };

export const approveERC20 = async (smartAccountClient: any, tokenAddress: string, amount: bigint, spender: string) => {
  return await smartAccountClient.writeContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "approve",
    args: [spender, amount.toString()],
  });
};

export const transferERC20 = async (
  smartAccountClient: any,
  tokenAddress: string,
  amount: bigint,
  toAddress: string,
) => {
  return await smartAccountClient.writeContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "transfer",
    args: [toAddress, amount.toString()],
  });
};

export const crossChainTransferERC20 = async (
  smartAccountClient: any,
  tokenAddress: string,
  amount: bigint,
  receiver: string,
) => {
  const destChainSelector = "3478487238524512106"; //https://docs.chain.link/ccip/supported-networks/v1_2_0/testnet#base-sepolia-arbitrum-sepolia

  return await smartAccountClient.writeContract({
    address: CROSSCHAIN_TRANSFER_CONTRACT_BASE_SEPOLIA,
    abi: ERC20_CROSSCHAIN_TRANSFER_ABI,
    functionName: "transferTokensPayNative",
    args: [destChainSelector, receiver, tokenAddress, amount.toString()],
  });
};

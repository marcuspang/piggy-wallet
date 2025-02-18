import { createAlchemySmartAccountClient } from "@alchemy/aa-alchemy";
import { getVersion060EntryPoint, toSmartContractAccount } from "@alchemy/aa-core";
import { Chain, type SignableMessage, http } from "viem";
import { baseSepolia, sepolia } from "viem/chains";

const paymasterTransportUrl = (chain: Chain) =>
  `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`;

const myAccount = (chain: Chain) =>
  toSmartContractAccount({
    /// REQUIRED PARAMS ///
    source: "TimelockBountyWallet",
    transport: http(paymasterTransportUrl(chain)),
    chain: sepolia,
    // The EntryPointDef that your account is compatible with
    entryPoint: getVersion060EntryPoint(chain),
    // This should return a concatenation of your `factoryAddress` and the `callData` for your factory's create account method
    getAccountInitCode: (calldata: Hex) => `0x${factoryAddress}{callData}`,
    // an invalid signature that doesn't cause your account to revert during validation
    getDummySignature: () => "0x1234...",
    // given a UO in the form of {target, data, value} should output the calldata for calling your contract's execution method
    encodeExecute: uo => "....",
    signMessage: ({ message }: SignableMessage) => "0x...",
    signTypedData: typedData => "0x000",

    //   /// OPTIONAL PARAMS ///
    //   // if you already know your account's address, pass that in here to avoid generating a new counterfactual
    //   accountAddress: Address,
    //   // if your account supports batching, this should take an array of UOs and return the calldata for calling your contract's batchExecute method
    //   encodeBatchExecute: uos => "0x...",
    //   // if your contract expects a different signing scheme than the default signMessage scheme, you can override that here
    //   signUserOperationHash: hash => "0x...",
    //   // allows you to define the calldata for upgrading your account
    //   encodeUpgradeToAndCall: params => "0x...",
  });

const client = async (chain: Chain) =>
  createAlchemySmartAccountClient({
    // created above
    account: await myAccount(chain),
    chain: baseSepolia,
    transport: http("RPC_URL"),
  });

import { ERC20_ABI, ERC20_CROSSCHAIN_TRANSFER_ABI } from "./ABI";
import { CROSSCHAIN_TRANSFER_CONTRACT_BASE_SEPOLIA } from "./constants";
import {
  ENTRYPOINT_ADDRESS_V07,
  type SmartAccountClient,
  createSmartAccountClient,
  walletClientToSmartAccountSigner,
} from "permissionless";
import type { EntryPoint } from "permissionless/_types/types";
import { type SafeSmartAccount, signerToSafeSmartAccount } from "permissionless/accounts";
import { Erc7579Actions, erc7579Actions } from "permissionless/actions/erc7579";
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { Chain, type Transport, WalletClient, createPublicClient, http } from "viem";

export type SafeSmartAccountClient = SmartAccountClient<EntryPoint, Transport, Chain, SafeSmartAccount<EntryPoint>> &
  Erc7579Actions<EntryPoint, SafeSmartAccount<EntryPoint>>;

const erc7569LaunchpadAddress = "0xEBe001b3D534B9B6E2500FB78E67a1A137f561CE";
const safe4337ModuleAddress = "0x3Fdb5BC686e861480ef99A6E3FaAe03c0b9F32e2";

const transportUrl = (chain: Chain) =>
  `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`;

export const publicClient = (chain: Chain) =>
  createPublicClient({
    transport: http(chain?.rpcUrls.default.http[0].toString()),
  });

export const paymasterClient = (chain: Chain) =>
  createPimlicoPaymasterClient({
    transport: http(transportUrl(chain)),
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });

export const pimlicoBundlerClient = (chain: Chain) =>
  createPimlicoBundlerClient({
    transport: http(transportUrl(chain)),
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });

export const getPimlicoSmartAccountClient = async (
  address: `0x${string}`,
  chain: Chain,
  walletClient: WalletClient, //-> wallet: EmbeddedWalletState
) => {
  const signer = walletClientToSmartAccountSigner(walletClient as any);

  const account = await signerToSafeSmartAccount(publicClient(chain), {
    entryPoint: ENTRYPOINT_ADDRESS_V07,
    signer: signer,
    safeVersion: "1.4.1",
    saltNonce: 120n,
    safe4337ModuleAddress,
    erc7569LaunchpadAddress,
  });

  return createSmartAccountClient({
    account,
    chain,
    bundlerTransport: http(transportUrl(chain)),
    middleware: {
      gasPrice: async () => (await pimlicoBundlerClient(chain).getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
      sponsorUserOperation: paymasterClient(chain).sponsorUserOperation, // optional
    },
  }).extend(erc7579Actions({ entryPoint: ENTRYPOINT_ADDRESS_V07 })) as SafeSmartAccountClient;
};

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

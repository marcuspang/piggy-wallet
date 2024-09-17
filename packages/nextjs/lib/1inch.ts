import { type BlockchainProviderConnector, FusionSDK } from "@1inch/fusion-sdk";
import type { Address } from "viem";

export async function placeOrder(
  provider: BlockchainProviderConnector,
  from: Address,
  chainId: number,
  amount: string,
  fromTokenAddress: string,
  toTokenAddress: string,
) {
  const sdk = new FusionSDK({
    url: "https://api.1inch.dev/fusion",
    network: chainId,
    blockchainProvider: provider,
    authKey: process.env.NEXT_PUBLIC_1INCH_API_KEY,
  });

  return sdk.placeOrder({
    fromTokenAddress,
    toTokenAddress,
    amount,
    walletAddress: from,
  });
}

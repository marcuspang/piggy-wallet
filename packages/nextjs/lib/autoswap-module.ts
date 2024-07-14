import { encodeAbiParameters, parseAbiParameters } from "viem";
import type { SafeSmartAccountClient } from "~~/lib/permissionless";

export const moduleAddress = "0x5c97696418f4bf457676385ed6e0442001d3fe02" as `0x${string}`;
const sepoliaUSDCTokenAddress = "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8" as `0x${string}`;
const poolSwapTestRouterAddress = "0x9A8ca723F5dcCb7926D00B71deC55c2fEa1F50f7" as `0x${string}`;

export const installAutoswapModule = async (safe: SafeSmartAccountClient) => {
  const txHash = await safe.installModule({
    type: "executor",
    address: moduleAddress,
    context: encodeAbiParameters(parseAbiParameters("address, address"), [
      sepoliaUSDCTokenAddress,
      poolSwapTestRouterAddress,
    ]),
  });

  console.log("Autoswap USDC module is being installed: https://sepolia.etherscan.io/tx/" + txHash);

  return txHash;
};

export const isAutoswapModuleInstalled = async (safe: SafeSmartAccountClient) => {
  return safe.isModuleInstalled({
    type: "executor",
    address: moduleAddress,
    context: encodeAbiParameters(parseAbiParameters("address, address"), [
      sepoliaUSDCTokenAddress,
      poolSwapTestRouterAddress,
    ]),
  });
};

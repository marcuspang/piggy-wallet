import { encodeAbiParameters, parseAbiParameters } from "viem";
import type { SafeSmartAccountClient } from "~~/lib/permissionless";

export const moduleAddress = "0x0add469287b392a6ec4cedb0a81fa902237284ea" as `0x${string}`;
const sepoliaUSDCTokenAddress = "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8" as `0x${string}`;

export const installBountyModule = async (safe: SafeSmartAccountClient) => {
  const txHash = await safe.installModule({
    type: "executor",
    address: moduleAddress,
    context: encodeAbiParameters(parseAbiParameters("address"), [sepoliaUSDCTokenAddress]),
  });

  console.log("Bounty module is being installed: https://sepolia.etherscan.io/tx/" + txHash);

  return txHash;
};

export const isTimelockModuleInstalled = async (safe: SafeSmartAccountClient) => {
  return safe.isModuleInstalled({
    type: "executor",
    address: moduleAddress,
    context: encodeAbiParameters(parseAbiParameters("address"), [sepoliaUSDCTokenAddress]),
  });
};

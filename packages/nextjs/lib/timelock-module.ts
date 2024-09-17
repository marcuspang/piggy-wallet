import { encodeAbiParameters, parseAbiParameters } from "viem";
import type { SafeSmartAccountClient } from "~~/lib/permissionless";

export const moduleAddress = "0x991a4452dda8342887f6ded0ebfee43b4b372589" as `0x${string}`;
const sepoliaUSDCTokenAddress = "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8" as `0x${string}`;
const poolSwapTestRouterAddress = "0x9A8ca723F5dcCb7926D00B71deC55c2fEa1F50f7" as `0x${string}`;

export const installTimelockModule = async (safe: SafeSmartAccountClient, deadline: number, childAddress: string) => {
  const txHash = await safe.installModule({
    type: "executor",
    address: moduleAddress,
    context: encodeAbiParameters(parseAbiParameters("uint256, address, address"), [
      BigInt(deadline),
      safe.account.address,
      childAddress,
    ]),
  });

  console.log("Timelock USDC module is being installed: https://sepolia.etherscan.io/tx/" + txHash);

  return txHash;
};

export const isTimelockModuleInstalled = async (
  safe: SafeSmartAccountClient,
  deadline: number,
  childAddress: string,
) => {
  return safe.isModuleInstalled({
    type: "executor",
    address: moduleAddress,
    context: encodeAbiParameters(parseAbiParameters("uint256, address, address"), [
      BigInt(deadline),
      safe.account.address,
      childAddress,
    ]),
  });
};

import { encodeAbiParameters, parseAbiParameters } from "viem";
import type { SafeSmartAccountClient } from "~~/lib/permissionless";

export const moduleAddress = "0x5775f31922e4e70a1AA1C37a8F28EcC7799cb159" as `0x${string}`;
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

  console.log("Scheduled transfers module is being installed: https://sepolia.etherscan.io/tx/" + txHash);

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

// export const scheduleTransfer = async (
//   safe: SafeSmartAccountClient,
//   scheduledTransferInput: ScheduledTransferDataInput,
// ) => {
//   const { startDate, repeatEvery, numberOfRepeats, amount, recipient } = scheduledTransferInput;
//   const scheduledTransaction = {
//     startDate,
//     repeatEvery,
//     numberOfRepeats,
//     token: {
//       token_address: sepoliaUSDCTokenAddress as `0x${string}`,
//       decimals: 6,
//     },
//     amount,
//     recipient,
//   };

//   const scheduledTransactionData = getCreateScheduledTransferAction({
//     scheduledTransaction,
//   });
//   const txHash = await safe.sendTransaction({
//     to: scheduledTransactionData.target,
//     value: scheduledTransactionData.value as bigint,
//     data: scheduledTransactionData.callData,
//   });

//   return txHash;
// };

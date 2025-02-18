import { SafeSmartAccountClient } from "./permissionless";
import {
  getCreateScheduledTransferAction,
  getInstallScheduledTransfersExecutor,
  getScheduledTransactionData,
} from "@rhinestone/module-sdk";

export interface ScheduledTransferDataInput {
  startDate: number;
  repeatEvery: number;
  numberOfRepeats: number;
  amount: number;
  recipient: `0x${string}`;
}

export const scheduledTransfersModuleAddress = "0xF1aE317941efeb1ffB103D959EF58170F1e577E0";
const sepoliaUSDCTokenAddress = "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8";

export const install7579Module = async (
  safe: SafeSmartAccountClient,
  scheduledTransferInput: ScheduledTransferDataInput,
) => {
  const { startDate, repeatEvery, numberOfRepeats, amount, recipient } = scheduledTransferInput;
  const scheduledTransaction = {
    startDate,
    repeatEvery,
    numberOfRepeats,
    token: {
      token_address: sepoliaUSDCTokenAddress as `0x${string}`,
      decimals: 6,
    },
    amount,
    recipient,
  };

  const executionData = getScheduledTransactionData({
    scheduledTransaction,
  });

  const scheduledTransfersModule = getInstallScheduledTransfersExecutor({
    executeInterval: repeatEvery,
    numberOfExecutions: numberOfRepeats,
    startDate,
    executionData,
  });

  const txHash = await safe.installModule({
    type: "executor",
    address: scheduledTransfersModuleAddress,
    context: scheduledTransfersModule.data as `0x${string}`,
  });

  console.log("Scheduled transfers module is being installed: https://sepolia.etherscan.io/tx/" + txHash);

  return txHash;
};

export const scheduleTransfer = async (
  safe: SafeSmartAccountClient,
  scheduledTransferInput: ScheduledTransferDataInput,
) => {
  const { startDate, repeatEvery, numberOfRepeats, amount, recipient } = scheduledTransferInput;
  const scheduledTransaction = {
    startDate,
    repeatEvery,
    numberOfRepeats,
    token: {
      token_address: sepoliaUSDCTokenAddress as `0x${string}`,
      decimals: 6,
    },
    amount,
    recipient,
  };

  const scheduledTransactionData = getCreateScheduledTransferAction({
    scheduledTransaction,
  });
  const txHash = await safe.sendTransaction({
    to: scheduledTransactionData.target,
    value: scheduledTransactionData.value as bigint,
    data: scheduledTransactionData.callData,
  });

  return txHash;
};

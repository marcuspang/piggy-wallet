import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { TimelockBountySmartWalletAbi } from "~~/abi/TimelockBountySmartWallet";
import { TimelockBountySmartWalletFactoryAbi } from "~~/abi/TimelockBountySmartWalletFactory";

export default defineConfig({
  out: "lib/generated.ts",
  contracts: [
    {
      name: "TimelockBountySmartWallet",
      abi: TimelockBountySmartWalletAbi.abi,
    },
    {
      name: "TimelockBountySmartWalletFactory",
      abi: TimelockBountySmartWalletFactoryAbi.abi,
    },
  ],
  plugins: [react()],
});

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { createWalletClientFromWallet } from "@dynamic-labs/viem-utils";
import { useAccount } from "wagmi";
import { getPimlicoSmartAccountClient } from "~~/lib/permissionless";
import { notification } from "~~/utils/scaffold-eth";

export const useSafeAccount = () => {
  const { address, chain, isConnected } = useAccount();
  const { primaryWallet, isAuthenticated } = useDynamicContext();

  const handleDeploySafe = async () => {
    setLoading(true);
    setError(null);
    try {
      const userAddress = address as `0x${string}`;
      if (!primaryWallet || !chain) return;

      if (!process.env.NEXT_PUBLIC_PIMLICO_API_KEY) {
        notification.error("Please set NEXT_PUBLIC_PIMLICO_API_KEY in .env file and restart");
        return;
      }

      const walletClient = await createWalletClientFromWallet(primaryWallet);
      const { account, deployContract, name, uid } = await getPimlicoSmartAccountClient(
        userAddress,
        chain,
        walletClient,
      );
      console.log({ account, name, uid });
      setSafeAddress(account.address);
      setSafeDeployed(true);
      refetchSafeBalance();
      refetchSafeUSDCBalance();
    } catch (err) {
      setError("Failed to deploy Safe account.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
};

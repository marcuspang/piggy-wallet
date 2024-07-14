"use client";

import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { createWalletClientFromWallet } from "@dynamic-labs/viem-utils";
import { useAccount } from "wagmi";
import OnboardingSignUpScreen1 from "~~/app/OnboardingSignUpScreen1";
import OnboardingSignUpScreen2 from "~~/app/OnboardingSignUpScreen2";
import OnboardingSignUpScreen3 from "~~/app/OnboardingSignUpScreen3";
import OnboardingSignUpScreenComplete from "~~/app/OnboardingSignUpScreenComplete";
import { installAutoswapModule } from "~~/lib/autoswap-module";
import { installBountyModule } from "~~/lib/bounty-module";
import { getPimlicoSmartAccountClient, pimlicoBundlerClient } from "~~/lib/permissionless";
import { installTimelockModule } from "~~/lib/timelock-module";
import { notification } from "~~/utils/scaffold-eth";
import OnboardingSignUpScreen from "~~/components/OnboardingSignUpScreen";

const SetupPage = () => {
  const [childrenCount, setChildrenCount] = useState(0);
  const [birthday, setBirthday] = useState(new Date("01/01/2000").toDateString());
  const [email, setEmail] = useState("jane.doe@gmail.com");
  const [name, setName] = useState("Jane Doe");
  const [stage, setStage] = useState(0);
  const [loading, setLoading] = useState(false);

  const { primaryWallet, isAuthenticated } = useDynamicContext();
  const { address, chain, isConnected } = useAccount();

  const handleInstallModule = async () => {
    const userAddress = address as `0x${string}`;
    if (!primaryWallet || !chain) return;

    if (!process.env.NEXT_PUBLIC_PIMLICO_API_KEY) {
      notification.error("Please set NEXT_PUBLIC_PIMLICO_API_KEY in .env file and restart");
      return;
    }
    const walletClient = await createWalletClientFromWallet(primaryWallet);
    const client = await getPimlicoSmartAccountClient(userAddress, chain, walletClient);

    setLoading(true);

    const opHash = await installAutoswapModule(client);
    const opHash2 = await installBountyModule(client);
    const opHash3 = await installTimelockModule(client, 0, address!);
    const bundlerClient = pimlicoBundlerClient(chain);
    const receipts = await Promise.all(
      [opHash, opHash2, opHash3].map(opHash => bundlerClient.waitForUserOperationReceipt({ hash: opHash })),
    );
    console.log({ receipts });
    setLoading(false);
  };

  if (!isAuthenticated) {
    return <OnboardingSignUpScreen />;
  }

  if (stage === 0) {
    return (
      <OnboardingSignUpScreen1
        nextStage={count => {
          setChildrenCount(count);
          setStage(prev => prev + 1);
        }}
      />
    );
  } else if (stage === 1) {
    return (
      <OnboardingSignUpScreen2
        nextStage={(name, birthday, email) => {
          setName(name);
          setBirthday(birthday);
          setEmail(email);
          setStage(prev => prev + 1);
        }}
      />
    );
  } else if (stage === 2) {
    return (
      <OnboardingSignUpScreen3
        values={[{ name, birthday, email }]}
        nextStage={() => {
          setStage(prev => prev + 1);
          handleInstallModule();
        }}
      />
    );
  } else if (stage === 3) {
    return <OnboardingSignUpScreenComplete loading={loading} />;
  }
};

export default SetupPage;

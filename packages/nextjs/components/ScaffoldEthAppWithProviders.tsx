"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { DynamicContextProvider, mergeNetworks } from "@dynamic-labs/sdk-react-core";
import { GenericNetwork } from "@dynamic-labs/types";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useInitializeNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { customEvmNetworks } from "~~/lib/networks";
import scaffoldConfig from "~~/scaffold.config";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  useInitializeNativeCurrencyPrice();

  return (
    <>
      <div className="h-full min-h-screen">
        <main className="h-full min-h-screen">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const evmNetworks: GenericNetwork[] = [
  ...scaffoldConfig.targetNetworks.map(chain => ({
    blockExplorerUrls: chain.blockExplorers
      ? Object.values(chain.blockExplorers as any).map(({ url }: any) => url)
      : [],
    chainId: chain.id,
    name: chain.name,
    rpcUrls: Object.values(chain.rpcUrls).map(({ http }) => http[0]),
    iconUrls: [
      // chain.name === "Hardhat"
      // ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4i1wWF516fnkizp1WSDG5rnG8GfkQAVoVQ&s"
      "",
    ],
    nativeCurrency: chain.nativeCurrency,
    networkId: chain.id,
  })),
  ...customEvmNetworks,
];

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();

  return (
    <DynamicContextProvider
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      settings={{
        environmentId: scaffoldConfig.dynamicEnvId,
        walletConnectors: [EthereumWalletConnectors, ZeroDevSmartWalletConnectors],
        overrides: {
          evmNetworks: networks => mergeNetworks(evmNetworks, networks),
        },
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <ProgressBar />

            <ScaffoldEthApp>{children}</ScaffoldEthApp>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};

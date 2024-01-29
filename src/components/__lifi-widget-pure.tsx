import { LiFiWidget as _LiFiWidget } from "@lifi/widget";
import type { Account, Chain, Client, Transport } from "viem";
import { providers } from "ethersv5";
import { Config, useChainId, useConnectorClient, useDisconnect } from "wagmi";
import { useMemo } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}

function __LifiWidgetPure() {
  const chainId = useChainId();

  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const signer = useEthersSigner({ chainId });

  console.log("chainId", chainId, "signer", signer);

  return (
    <_LiFiWidget
      integrator="mtopswap"
      walletManagement={{
        connect: async () => {
          if (!signer) {
            open();
          }

          return signer as unknown as providers.JsonRpcSigner;
        },
        disconnect: async () => disconnect(),
        signer,
      }}
    />
  );
}

export default __LifiWidgetPure;

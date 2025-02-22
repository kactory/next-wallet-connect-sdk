import { EthereumProvider } from "@walletconnect/ethereum-provider";
import { useState } from "react";

export function useWalletConnect() {
    const [ provider, setProvider ] = useState<any>(null);

    const initialize = async (projectId: string) => {
        // 1. Create a new EthereumProvider instance
        const provider = await EthereumProvider.init({
            projectId,
            chains: [1, 137, 8453, 42161],
            methods: ["personal_sign", "eth_sendTransaction"],
            showQrModal: true,
            qrModalOptions: {
            themeMode: "light",
            },
        });

        setProvider(provider);
    }

    async function connect() {
        const accounts = await provider.enable();
        return accounts;
    }

    async function disconnect() {
        await provider.disconnect();
    }
  
    return {
        initialize,
        provider,
        connect,
        disconnect,
    };
}





// import { useState } from "react";
// import WalletConnect from "@walletconnect/client";

// export default function useWalletConnect() {
//     const [ theme , setTheme ] = useState<string | null>(null);
//     const [ accentColor , setAccentColor ] = useState<string | null>(null);
//     const [ aooName , setAooName ] = useState<string | null>(null);
//     const [ autoConnect, setAutoConnect ] = useState<boolean>(false);
//     const [ projectId , setProjectId ] = useState<string | null>(null);
//     const [ connector, setConnector ] = useState<WalletConnect | null>(null);
//     const [ account, setAccount ] = useState<string | null>(null);

//     const initialize = (
//         theme: string,
//         accentColor: string,
//         aooName: string,
//         autoConnect: boolean,
//         projectId: string,
//     ) => {
//         setTheme(theme);
//         setAccentColor(accentColor);
//         setAooName(aooName);
//         setAutoConnect(autoConnect);
//         setProjectId(projectId);
//     }

//     const connectWallet = async () => {
        
        
//         // WalletConnect 인스턴스 생성
//         const connector = WalletConnectProvider.init({
//             projectId: projectId,
//             theme: theme,
//             accentColor: accentColor,
//             aooName: aooName,
//             autoConnect: autoConnect,
//         });

//         // QR 코드가 이미 연결되어 있는지 확인
//         if (!connector.connected) {
//             await connector.createSession();
//         }

//         // 지갑과 연결
//         const { accounts } = await connector.connect();
//         setAccount(accounts[0]);
//         setConnector(connector);
//     };

//     const disconnectWallet = async () => {
//         if (connector) {
//             await connector.killSession();
//             setAccount(null);
//             setConnector(null);
//         }
//     };

//     return {
//         initialize,
//         connectWallet,
//         disconnectWallet,
//         connector,  
//         account,
//     }
// }
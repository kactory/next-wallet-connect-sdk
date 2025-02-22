'use client'

import { useEffect } from "react";
import { useWalletConnect } from "../hooks/wallet-connect.hook";

export default function WalletConnectButton() {
  const { 
    initialize,
    connect,
    disconnect
  } = useWalletConnect();

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_REOWN_PROJECT_ID);
    initialize(process.env.NEXT_PUBLIC_REOWN_PROJECT_ID as string);
  }, []);

  async function connectWallet() {
    const accounts = await connect();
    console.log(accounts);
  }

  return (
    <div>
      <button onClick={connectWallet}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
};
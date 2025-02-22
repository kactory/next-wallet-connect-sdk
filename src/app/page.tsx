
import Image from 'next/image';
import WalletConnectButton from "./components/wallet-connect-button";

export default function Home() {

  return (
    <div className={"pages"}>
      <Image src="/reown.svg" alt="Reown" width={150} height={150} priority />
      <h1>AppKit ethers Next.js App Router Example</h1>

      <WalletConnectButton />


      <div className="advice">
        <p>
          This projectId only works on localhost. <br/>
          Go to <a href="https://cloud.reown.com" target="_blank" className="link-button" rel="Reown Cloud">Reown Cloud</a> to get your own.
        </p>
      </div>
    </div>
  );
}
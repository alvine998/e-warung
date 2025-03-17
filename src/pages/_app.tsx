import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import BottomTab from "./components/BottomTab";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <div className="flex justify-center">
      <Head>
        <title>Warung</title>
      </Head>
      <div className="w-full max-w-2xl px-4 bg-slate-50 max-h-[100vh] overflow-auto">
        <Component {...pageProps} />
        {pathname?.includes("/seller") ? null : <BottomTab />}
      </div>
    </div>
  );
}

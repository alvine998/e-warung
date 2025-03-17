import { div } from "framer-motion/client";
import {
  BoxesIcon,
  HistoryIcon,
  HomeIcon,
  ListCheckIcon,
  ListTodoIcon,
  RefreshCwIcon,
  ScanQrCode,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SquareActivityIcon,
  User2Icon,
} from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

export default function BottomTab() {
  const router = useRouter();
  const SellerTabs = [
    { name: "Dashboard", href: "/seller/main/dashboard", icon: <HomeIcon /> },
    { name: "Produk", href: "/seller/main/product", icon: <BoxesIcon /> },
    {
      name: "Transaksi",
      href: "/seller/main/transaction",
      icon: <ListCheckIcon />,
    },
    {
      name: "Riwayat",
      href: "/seller/main/transaction_history",
      icon: <HistoryIcon />,
    },
    { name: "Profil", href: "/seller/main/profile", icon: <User2Icon /> },
  ];

  const BuyerTabs = [
    {
      name: "Beranda",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Kategori",
      href: "/category",
      icon: <ListTodoIcon />,
    },
    {
      name: "Belanja",
      href: "/buy",
      icon: <ShoppingBagIcon />,
    },
    {
      name: "Riwayat",
      href: "/history",
      icon: <RefreshCwIcon />,
    },
    {
      name: "Akun",
      href: "/account",
      icon: <User2Icon />,
    },
  ];
  return (
    <div className="fixed bottom-0 lg:left-1/2 lg:-translate-x-1/2 left-0 grid grid-cols-5 max-w-2xl w-full bg-white p-2">
      {router.pathname.includes("/seller")
        ? SellerTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => router.push(tab.href)}
              className={`flex flex-col items-center justify-center ${
                router.pathname == tab.href ? "text-yellow-700" : ""
              }`}
            >
              {tab.icon}
              <p>{tab.name}</p>
            </button>
          ))
        : BuyerTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => router.push(tab.href)}
              className={`flex flex-col items-center justify-center ${
                router.pathname == tab.href ? "text-yellow-700" : ""
              }`}
            >
              {tab.icon}
              <p>{tab.name}</p>
            </button>
          ))}
    </div>
  );
}

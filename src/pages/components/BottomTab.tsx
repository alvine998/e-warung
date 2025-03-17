import { div } from "framer-motion/client";
import {
  HomeIcon,
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
  return (
    <div className="fixed bottom-0 lg:left-1/2 lg:-translate-x-1/2 left-0 grid grid-cols-5 max-w-2xl w-full bg-white p-2">
      <button className="flex flex-col items-center justify-center">
        <HomeIcon className={router.pathname == "/" ? "text-yellow-700" : ""} />
        <p className={router.pathname == "/" ? "text-yellow-700" : ""}>
          Beranda
        </p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <ListTodoIcon
          className={router.pathname == "/category" ? "text-yellow-700" : ""}
        />
        <p className={router.pathname == "/category" ? "text-yellow-700" : ""}>
          Kategori
        </p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <ShoppingBagIcon
          className={router.pathname == "/buy" ? "text-yellow-700" : ""}
        />
        <p className={router.pathname == "/buy" ? "text-yellow-700" : ""}>
          Belanja
        </p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <RefreshCwIcon
          className={router.pathname == "/history" ? "text-yellow-700" : ""}
        />
        <p className={router.pathname == "/history" ? "text-yellow-700" : ""}>
          Riwayat
        </p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <User2Icon
          className={router.pathname == "/account" ? "text-yellow-700" : ""}
        />
        <p className={router.pathname == "/account" ? "text-yellow-700" : ""}>
          Akun
        </p>
      </button>
    </div>
  );
}

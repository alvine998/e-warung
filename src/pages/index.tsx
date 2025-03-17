import {
  BellIcon,
  DotIcon,
  MailIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Cart from "./components/Cart";
import SliderBanner from "./components/SliderBanner";
import Category from "./components/Home/Category";
import FlashSale from "./components/Home/FlashSale";
import PopularProduct from "./components/Home/PopularProduct";
import TooltipComponent from "./components/Tooltips";
import NotificationSide from "./components/Notification";
import InboxSide from "./components/Inbox";

export default function index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenNotif, setIsOpenNotif] = useState<boolean>(false);
  const [isOpenInbox, setIsOpenInbox] = useState<boolean>(false);

  return (
    <div className="p-4">
      {/* Open Side Cart */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-5"
      >
        <Cart setIsOpen={setIsOpen} />
      </motion.div>

      {/* Open Side Notif */}
      {isOpenNotif && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpenNotif(false)}
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpenNotif ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-5"
      >
        <NotificationSide setIsOpen={setIsOpenNotif} />
      </motion.div>

      {/* Open Side Inbox */}
      {isOpenInbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpenInbox(false)}
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpenInbox ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-5"
      >
        <InboxSide setIsOpen={setIsOpenInbox} />
      </motion.div>

      <div className="lg:px-5 px-0 lg:pb-10 pb-2">
        {/* Cart */}
        <div className="flex justify-between items-end">
          <h1 className="font-bold">WARUNG</h1>
          <div className="flex gap-5">
            <TooltipComponent text="Notifikasi">
              <button
                onClick={() => {
                  setIsOpenNotif(true);
                }}
              >
                <BellIcon className="w-6 h-6" />
              </button>
            </TooltipComponent>

            <TooltipComponent text="Pesan">
              <button
                onClick={() => {
                  setIsOpenInbox(true);
                }}
              >
                <MailIcon className="w-6 h-6" />
              </button>
            </TooltipComponent>
            <TooltipComponent text="Keranjang">
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </button>
            </TooltipComponent>
          </div>
        </div>
        {/* Search */}
        <div className="my-2 flex bg-gray-200 rounded gap-2 py-4 px-4">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Cari Kebutuhanmu Disini..."
            className="bg-transparent text-gray-500 focus:outline-none w-full placeholder-gray-500"
          />
        </div>

        {/* Category */}
        <div>
          <Category />
        </div>

        {/* Slider */}
        <div className="my-4">
          <SliderBanner />
        </div>

        {/* Flash Sale */}
        <div className="my-4">
          <FlashSale />
        </div>

        {/* Popular Product */}
        <div className="my-4">
          <PopularProduct />
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface Props {
  setIsOpen: any;
}

export default function NotificationSide({ setIsOpen }: Props) {
  return (
    <div>
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <h2 className="text-lg font-bold">Notifikasi</h2>
      <p className="mt-4">Belum ada notifikasi apapun buat kamu</p>
    </div>
  );
}

import React from "react";

interface Props {
  setIsOpen: any;
}


export default function InboxSide({ setIsOpen }: Props) {
  return (
    <div>
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <h2 className="text-lg font-bold">Pesan Masuk</h2>
      <p className="mt-4">Belum ada pesan masuk</p>
    </div>
  );
}

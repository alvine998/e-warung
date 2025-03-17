import React from "react";

export default function FlashSale() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Flash Sale 5.5</h2>
        <button className="text-blue-500">Lihat lainnya</button>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div>
          <div className="bg-gray-300 animate-pulse w-full h-40 rounded-xl relative">
            <div className="bg-red-500 p-1 rounded w-20 flex items-center justify-center absolute bottom-2 right-2">
              <p>05:00</p>
            </div>
          </div>
          <h5>Soklin Lantai</h5>
          <h5>Rp 2.500</h5>
        </div>
        <div>
          <div className="bg-gray-300 animate-pulse w-full h-40 rounded-xl relative">
            <div className="bg-red-500 p-1 rounded w-20 flex items-center justify-center absolute bottom-2 right-2">
              <p>03:00</p>
            </div>
          </div>{" "}
          <h5>Soklin Lantai</h5>
          <h5>Rp 2.500</h5>
        </div>
        <div>
          <div className="bg-gray-300 animate-pulse w-full h-40 rounded-xl relative">
            <div className="bg-red-500 p-1 rounded w-20 flex items-center justify-center absolute bottom-2 right-2">
              <p>02:15</p>
            </div>
          </div>{" "}
          <h5>Soklin Lantai</h5>
          <h5>Rp 2.500</h5>
        </div>
      </div>
    </div>
  );
}

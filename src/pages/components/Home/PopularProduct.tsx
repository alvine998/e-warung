import React from "react";

export default function PopularProduct() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Produk Terlaris</h2>
        <button className="text-blue-500">Lihat lainnya</button>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div>
          <div className="bg-gray-300 animate-pulse w-full h-40 rounded-xl"></div>
          <h5>Soklin Lantai</h5>
          <h5>Rp 2.500</h5>
        </div>
        <div>
          <div className="bg-gray-300 animate-pulse w-full h-40 rounded-xl"></div>
          <h5>Soklin Lantai</h5>
          <h5>Rp 2.500</h5>
        </div>
        <div>
          <div className="bg-gray-300 animate-pulse w-full h-40 rounded-xl"></div>
          <h5>Soklin Lantai</h5>
          <h5>Rp 2.500</h5>
        </div>
      </div>
    </div>
  );
}

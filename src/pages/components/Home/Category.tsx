import React from "react";

export default function Category() {
  return (
    <div className="my-4 flex gap-8 overflow-x-auto scrollbar-hide">
      <button className="flex flex-col items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-20 h-20 rounded"></div>
        <p>Promo</p>
      </button>

      <button className="flex flex-col items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-20 h-20 rounded"></div>
        <p>Makanan</p>
      </button>

      <button className="flex flex-col items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-20 h-20 rounded"></div>
        <p>Minuman</p>
      </button>

      <button className="flex flex-col items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-20 h-20 rounded"></div>
        <p>Skincare</p>
      </button>

      <button className="flex flex-col items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-20 h-20 rounded"></div>
        <p>Perkakas</p>
      </button>

      <button className="flex flex-col items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-20 h-20 rounded"></div>
        <p>Pulsa</p>
      </button>
    </div>
  );
}

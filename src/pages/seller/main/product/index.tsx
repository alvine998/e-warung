import Input from "@/pages/components/common/Input";
import FilterProduct from "@/pages/components/Seller/Product/Filter";
import TooltipComponent from "@/pages/components/Tooltips";
import {
  PencilIcon,
  PlusCircleIcon,
  ScanBarcodeIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      stock: 10,
      price: 1000,
      description: "",
    },
    {
      id: 2,
      name: "Product 2",
      stock: 20,
      price: 2000,
      description: "",
    },
    {
      id: 3,
      name: "Product 3",
      stock: 30,
      price: 3000,
      description: "",
    },
    {
      id: 4,
      name: "Product 4",
      stock: 40,
      price: 4000,
      description: "",
    },
  ];
  return (
    <div className="p-4 pb-20">
      <h1 className="font-bold text-center text-2xl">Daftar Produk</h1>
      <Input placeholder="Cari produk disini..." />
      <div className="my-4 overflow-auto scrollbar-hide">
        <FilterProduct />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 my-4">
        {products?.map((product) => (
          <div key={product.id} className="bg-white shadow rounded p-2">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">{product.name}</h2>
              <div className="flex gap-2">
                <TooltipComponent text="Scan Barcode">
                  <button className="px-2 py-1 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 duration-200 transition-all">
                    <ScanBarcodeIcon />
                  </button>
                </TooltipComponent>
                <TooltipComponent text="Ubah Produk">
                  <button className="px-2 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 duration-200 transition-all">
                    <PencilIcon />
                  </button>
                </TooltipComponent>
                <TooltipComponent text="Hapus Produk">
                  <button className="px-2 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 duration-200 transition-all">
                    <Trash2Icon />
                  </button>
                </TooltipComponent>
              </div>
            </div>
            <p>Stok: {product.stock}</p>
            <p>Harga: {product.price}</p>
          </div>
        ))}
        <div className="fixed lg:bottom-20 bottom-16 right-8 lg:right-[500px]">
          <button className="text-white bg-green-500 rounded-full">
            <PlusCircleIcon className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

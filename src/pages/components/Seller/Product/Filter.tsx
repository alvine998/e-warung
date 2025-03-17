import React, { useState } from "react";
import Button from "../../common/Button";

export default function FilterProduct() {
  const [isChoose, setIsChoose] = useState<string>("Semua");
  const categories = ["Semua", "Makanan", "Minuman", "Skincare", "Perkakas", "Obat", "Kebersihan", "Lainnya"];
  return (
    <div className="flex justify-start items-center gap-2">
      {categories.map((category, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => {
            setIsChoose(category);
          }}
          variant="custom-color"
          className={`${
            isChoose === category
              ? "bg-blue-500 text-white"
              : "bg-white border-2"
          } px-4 py-2 rounded-md text-black font-medium focus:outline-none focus:ring-2 transition duration-300`}
          disabled={isChoose === category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

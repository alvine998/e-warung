import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DasboardPage() {
  const [stats, setStats] = useState<any>({ options: {}, series: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setStats({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    });
  }, []);
  return (
    <div className="p-4 pb-20">
      <h1 className="text-center font-bold text-2xl">Statistik Warungmu</h1>
      <div className="flex items-center justify-center my-4">
        <Chart
          options={stats.options}
          series={stats.series}
          type="bar"
          width="500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link href={"/seller/main/product"}>
          <div className="bg-white shadow rounded-xl w-full h-40 my-2 flex flex-col items-center justify-center gap-2">
            <h5 className="font-bold text-lg">Produk</h5>
            <h5 className="font-bold text-2xl">0</h5>
          </div>
        </Link>
        <Link href={"/seller/main/transaction"}>
          <div className="bg-white shadow rounded-xl w-full h-40 my-2 flex flex-col items-center justify-center gap-2">
            <h5 className="font-bold text-lg">Transaksi</h5>
            <h5 className="font-bold text-2xl">0</h5>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-xl w-full h-40 my-2 flex flex-col items-center justify-center gap-2">
          <h5 className="font-bold text-lg">Profit</h5>
          <h5 className="font-bold text-2xl">Rp 0</h5>
        </div>
        <div className="bg-white shadow rounded-xl w-full h-40 my-2 flex flex-col items-center justify-center gap-2">
          <h5 className="font-bold text-lg">Omset</h5>
          <h5 className="font-bold text-2xl">Rp 0</h5>
        </div>
      </div>
    </div>
  );
}

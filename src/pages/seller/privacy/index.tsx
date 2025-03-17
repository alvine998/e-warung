import { PRIVACY } from "@/pages/data/privacy";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function TermsPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <div className="p-4">
      {isHydrated && (
        <>
          <Link href={"/seller/registration"}>
            <button className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <p>Kembali</p>
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-center mt-5">
            Syarat dan Ketentuan Penjual di E-commerce Warung
          </h1>
          {PRIVACY?.map((value) => (
            <p className="mt-4" key={value.id}>
              <strong>
                {value.id == 8 ? "" : `${value.id}.`} {value.title}
              </strong>
              {value.children?.map((child) => (
                <p className="ml-2 mt-1" key={child.id}>
                  {value.id}.{child.id}. {child.text}
                </p>
              ))}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

import { TERMS } from "@/pages/data/terms";
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
          {TERMS?.map((term) => (
            <p className="mt-4" key={term.id}>
              <strong>
                {term.id == 8 ? "" : `${term.id}.`} {term.title}
              </strong>
              {term.children?.map((child) => (
                <p className="ml-2 mt-1" key={child.id}>
                  {`${term.id}.${child.id}.`} {child.text}
                </p>
              ))}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

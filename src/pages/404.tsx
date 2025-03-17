"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Custom404() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <Link
        href={
          pathname?.includes("/seller/main")
            ? "/seller/main/dashboard"
            : pathname?.includes("/seller")
            ? "/seller/login"
            : "/"
        }
      >
        <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Go Home
        </button>
      </Link>
    </div>
  );
}

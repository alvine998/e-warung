import Button from "@/pages/components/common/Button";
import Input from "@/pages/components/common/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function LoginSellerPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const payload = {
        email,
        password,
      };
      console.log(payload);
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
      });
      setLoading(false);
      router.push("/seller/main/dashboard");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error?.response?.data?.error_message);
    }
  };
  return (
    <div className="h-screen bg-yellow-100 w-full flex items-center justify-center lg:px-10 px-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center">
          Selamat Datang di Menu Penjual
        </h1>
        <div className="bg-white rounded-lg p-4 shadow w-full my-5">
          <h2 className="text-lg font-bold text-center">Login</h2>
          <form onSubmit={onSubmit} className="mt-4">
            <Input
              label="Email / No Telepon"
              placeholder="Masukan Email / No Telepon"
              required
              name="email"
              type="email"
            />
            <Input
              label="Password"
              placeholder="Masukan Password"
              type="password"
              required
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              className="mt-2"
              name="password"
            />
            <div className="flex justify-end">
              <Link
                href="/seller/forgot-password"
                className="text-blue-500 text-xs mt-1"
              >
                Lupa Password
              </Link>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
            <Button
              disabled={loading}
              variant="warning"
              className="mt-5 w-full"
            >
              {loading ? "Loading..." : "Masuk"}
            </Button>
          </form>
          <p className="text-center mt-2">Atau</p>
          {
            <Link href="/seller/registration">
              <Button variant="primary" type="button" className="mt-2 w-full">
                Daftar
              </Button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

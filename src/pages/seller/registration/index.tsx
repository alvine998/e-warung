import Button from "@/pages/components/common/Button";
import Input from "@/pages/components/common/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function LoginSellerPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirm_password = e.target.confirm_password.value;

      if (password !== confirm_password) {
        setErrorMessage("Password Tidak Sama");
        setLoading(false);
        return;
      }

      if (!check) {
        setErrorMessage("Harap setuju pada syarat dan ketentuan");
        setLoading(false);
        return;
      }

      const payload = {
        name,
        phone,
        email,
        password,
        agreement: check ? 1 : 0,
      };
      console.log(payload);
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
      });
      setLoading(false);
      router.push("/seller/login");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error?.response?.data?.error_message);
    }
  };
  return (
    <div className="h-screen bg-yellow-100 w-full flex items-center justify-center lg:px-10 px-4 pb-4">
      <div className="w-full lg:pt-8 pt-10">
        <h1 className="text-2xl font-bold text-center">
          Selamat Datang di Menu Penjual
        </h1>
        <div className="bg-white rounded-lg p-4 shadow w-full my-5">
          <h2 className="text-lg font-bold text-center">Pendaftaran</h2>
          <form onSubmit={onSubmit} className="mt-4">
            <Input
              label="Nama"
              placeholder="Masukan Nama"
              required
              name="name"
              type="text"
            />
            <Input
              label="Email"
              placeholder="Masukan Email"
              required
              name="email"
              type="email"
            />
            <Input
              label="No Telepon"
              placeholder="Masukan No Telepon"
              required
              name="phone"
              type="text"
              maxLength={13}
            />
            <Input
              label="Password"
              placeholder="Masukan Password"
              type="password"
              required
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              name="password"
            />
            <Input
              label="Konfirmasi Password"
              placeholder="Masukan Konfirmasi Password"
              type="password"
              required
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              name="confirm_password"
            />
            <div className="flex gap-2 items-center mt-2">
              <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
              />
              <span className="text-xs">
                Saya Menyetujui{" "}
                <a href="/seller/terms" className="text-blue-500">
                  Syarat Ketentuan
                </a>{" "}
                &{" "}
                <a href="/seller/privacy" className="text-blue-500">
                  Privasi Pengguna
                </a>
              </span>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-xs mt-4">{errorMessage}</p>
            )}
            <Button
              disabled={loading}
              variant="warning"
              className="mt-5 w-full"
            >
              {loading ? "Loading..." : "Daftar"}
            </Button>
          </form>
          <p className="text-center mt-2">Atau</p>
          <Link href={"/seller/login"}>
            <Button variant="primary" type="button" className="mt-2 w-full">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

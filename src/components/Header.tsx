"use client";
import React from "react";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();

  return (
    <header className="w-full h-full flex flex-col items-center justify-center text-black mx-auto py-3 pb-6 lg:px-0">
      <nav className="w-full flex justify-between">
        {router !== "/" ? (
          <Link href="/">
            <div className="md:px-1 ">
              <Image
                src="/imgs/logo.png"
                alt="logo"
                width={100}
                height={100}
                className=""
              />
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        <Login />
      </nav>
    </header>
  );
};

export default Header;

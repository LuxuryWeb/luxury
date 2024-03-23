"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import MenuHamburger from "./MenuHamburger";

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <>
          <Link href="/profile" className="hidden md:block">
            <div className="flex flex-row gap-4 items-center">
              {session.user.role === "admin" && (
                <div className="px-6">
                  <Link href="/dashboard">
                    <button className="inline-block w-40 bg-black py-2 px-5 text-white rounded-xl hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105">
                      Dashboard
                    </button>
                  </Link>
                </div>
              )}
              <div className="flex flex-row gap-5 items-center bg-zinc-800 text-white rounded-xl pl-6 pr-2 py-1">
                <div className="flex flex-col ">
                  <h5 className="capitalize font-medium">
                    {session.user.name}
                  </h5>
                  <p>{session.user.email}</p>
                </div>
                <Image
                  src={session.user.image as string}
                  width={24}
                  height={24}
                  alt={session.user.name as string}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </Link>
          <div className="block md:hidden">
            <MenuHamburger admin={session.user.role === "admin"} />
          </div>
        </>
      ) : (
        <div
          onClick={() => signIn()}
          className="cursor-pointer bg-zinc-800 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="45"
            viewBox="0 -960 960 960"
            width="45"
            className="fill-white"
          >
            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default Login;

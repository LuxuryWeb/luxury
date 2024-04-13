"use client";
import { signIn, useSession } from "next-auth/react";
import ProtectedRoute from "./routeprotect";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute requiresAuth={false}>
      <section className="flex h-full text-white flex-col items-center justify-center sm:justify-start">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h2 className="pt-8 text-2xl sm:text-5xl text-center">
            Bienvenidos a{" "}
          </h2>
          <div className="background bg-zinc-800 w-full  lg:px-40 lg:py-8 flex flex-col gap-5">
            <Image
              src="/imgs/home.png"
              alt="logo"
              width={500}
              height={600}
              className="max-w-[300px] max-h-[300px]"
            />
          </div>
          <h3 className="background bg-zinc-800 py-4 w-full text-lg text-center">
            Que estas esperando para dar un salto en tu carrera!
          </h3>

          {session ? (
            <Link href={"/modulos"}>
              <button className="inline-block w-60 bg-black mt-4 py-3 px-3 text-white rounded-3xl hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105 ">
                Módulos
              </button>
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="inline-block w-1/2 bg-y bg-black mt-4 py-3 px-3 text-white rounded-3xl hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105"
            >
              Ingresar
            </button>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
}

"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { modulos } from "../../../utils/modulos";
import Link from "next/link";
import ProtectedRoute from "../routeprotect";

const Modulos = () => {
  // const { data: session } = useSession();

  return (
    <ProtectedRoute requiresAuth={true}>
      <section className="w-full  h-full flex flex-col justify-start  text-white gap-5">
        {/* <h1> Bienvenido {session?.user ? session.user.name : "Usuario"}</h1> */}
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {modulos.map((modulo, i) => (
            <Link href={`/modulos/${modulo.link}`} key={i}>
              <div className="w-56 h-48 text-slate-300 hover:text-white  rounded-lg  bg-zinc-800 hover:bg-zinc-500 flex flex-col p-4 sombra transform hover:scale-105 transition duration-500 ease-in-out">
                <p className="font-medium">{modulo.name}</p>
                <span className="text-8xl font-extrabold">M{i + 1}</span>
                <p className="h-full flex items-end">Ver clases</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Modulos;

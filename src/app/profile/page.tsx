"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import ProtectedRoute from "../routeprotect";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import Link from "next/link";

const Profile = () => {
  const { data: session }: any = useSession();

  return (
    <ProtectedRoute requiresAuth={true} profile={true}>
      <section className="w-full flex items-center justify-center p-1 sm:px-28">
        <div className="w-full h-full bg-zinc-800 text-white rounded-xl">
          {!session ? (
            <Loader />
          ) : (
            <div className=" flex flex-col justify-center items-center p-10 gap-5">
              <Image
                src={session.user.image}
                alt="user"
                width="200"
                height="200"
                className="rounded-full object-cover p-8 md:p-2 xl:p-0"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-bold">Nombre</p>
                <p>
                  {session ? session.user.name : "El nombre no esta disponible"}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                {session.user.role === "admin" ? (
                  <>
                    <p className="text-lg font-bold">Status</p>
                    <p>Admin</p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-bold">Status</p>
                    <p>
                      {session.user.status === "initial"
                        ? "Has ingresado correctamente, debes esperar a que te acepten"
                        : session.user.status === "approved"
                        ? "Has sido aceptado, podes ver el contenido"
                        : "No has sido aceptado, tenes que esperar a que te acepten"}
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-row gap-4 mx-auto">
                <Link href={"/"}>
                  <button className="w-full px-4 py-2 bg-black hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105 text-white rounded-lg max-w-[120px]">
                    Inicio
                  </button>
                </Link>

                <button
                  onClick={() => signOut()}
                  className="w-full px-4 py-2 bg-black hover:sombraGold transition duration-500 ease-in-out transform hover:scale-105 text-white rounded-lg max-w-[120px]"
                >
                  Salir
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Profile;

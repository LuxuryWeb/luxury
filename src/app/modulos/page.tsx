'use client'
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "../routeprotect";
import Image from "next/image";
import { modules } from "@prisma/client";

const Modulos = () => {
  // const { data: session } = useSession();
  const [modulos, setModulos] = useState<modules[]>()
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`/api/modules`, {
        headers: {
          /* Authorization: `Bearer ${json.token}` */
        }
      })
    
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
    
      return res.json()
    }

    fetchdata()
      .then((data) => {
        setModulos(data.modules as modules[])
        console.log(data);
        
      })
      .catch(console.error)
  }, [])

  return (
    <ProtectedRoute requiresAuth={true}>
      <section className="w-full  h-full flex flex-col justify-start  text-white gap-5">
        {/* <h1> Bienvenido {session?.user ? session.user.name : "Usuario"}</h1> */}
        <div className="flex flex-wrap gap-6 justify-center">
          {modulos?.map((modulo, i) => (
            <Link href={`/modulos/${modulo.link}`} key={i}>
              <div className="w-full h-full text-slate-300 hover:text-white  rounded-lg  bg-zinc-800 hover:bg-zinc-500 flex flex-col p-4 sombra transform hover:scale-105 transition duration-500 ease-in-out">
                <p className="font-medium">{modulo.name}</p>
                <Image
                  src={modulo.image}
                  alt={modulo.name}
                  width={400}
                  height={400}
                  className="w-full h-full max-w-[500px] lg:max-w-[540px] rounded-lg my-1"
                />
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

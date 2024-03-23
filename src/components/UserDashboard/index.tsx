import { fetchUsersAsync } from "@/redux/slices/userSlice";
import { User } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal";

interface Props {
  user: User;
  key: string;
}

const UserDashboard = ({ user, key }: Props) => {
  const { image, name, email, status, role } = user;
  const { data: session, update } = useSession();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAccept = async (email: string, status: string, role?: string) => {
    try {
      if (role) {
        const res = await axios.post("/api/status", { email, status, role });
        await update({ ...session, user: { ...session?.user } });
        return dispatch(fetchUsersAsync());
      }

      const res = await axios.post("/api/status", { email, status });
      await update({ ...session, user: { ...session?.user } });
      dispatch(fetchUsersAsync());
      if (res.data.status === "approved") {
        await axios.post("/api/send-mail-user");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <tr key={key}>
      <td className="px-4 py-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </td>
      <td className=" px-4 py-2">{name}</td>
      <td className=" px-4 py-2">{email}</td>
      <td className=" px-4 py-2">
        {status === "approved" ? "Aprobado" : "Rechazado"}
      </td>
      <td className=" px-4 py-2">{role === "user" ? "Usuario" : "Admin"}</td>
      <td className=" px-4 py-2 flex ">
        <button
          onClick={() => handleAccept(email, "approved")}
          className={`${
            status === "approved"
              ? "bg-green-400 hover:bg-green-600 text-white"
              : "text-green-500 border-green-500 border-2 hover:text-green-700 hover:border-green-700"
          }   font-bold py-2 px-4 mr-2 rounded-2xl transition duration-500 ease-in-out`}
        >
          {status === "approved" ? "Aceptado" : "Aceptar"}
        </button>
        <button
          onClick={() => handleAccept(email, "denied")}
          className={`${
            status === "approved"
              ? "text-red-300 border-red-300 hover:text-red-500 hover:border-red-500 border-2"
              : "bg-red-500 hover:bg-red-600 text-white"
          }  font-bold py-2 px-4 mr-2 rounded-2xl transition duration-500 ease-in-out`}
        >
          {status === "approved" ? "Rechazar" : "Rechazado"}
        </button>
        <button
          onClick={openModal}
          // onClick={() => handleAccept(email, "approved", "admin")}
          className={`bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl transition duration-500 ease-in-out`}
        >
          Admin
        </button>
      </td>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        user={{ name, email }}
        handleAdmin={handleAccept}
      />
    </tr>
  );
};

export default UserDashboard;

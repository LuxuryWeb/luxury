"use client";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, fetchUsersAsync } from "../../redux/slices/userSlice";
import { User } from "@/types";
import UserDashboard from "@/components/UserDashboard";
import ProtectedRoute from "../routeprotect";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <ProtectedRoute requiresAuth={true}>
      <section className="overflow-x-auto scroll-custom bg-white p-5 rounded-3xl">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Perfil</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Rol</th>
              <th className="px-4 py-2">Aceptar / Rechazar</th>
            </tr>
          </thead>
          <tbody>
            <Suspense
              fallback={
                <div className="animate-pulse w-full h-80 bg-gray-300"></div>
              }
            >
              {users.map((user) => (
                <UserDashboard key={user._id!} user={user} />
              ))}
            </Suspense>
          </tbody>
        </table>
        {!users && (
          <div className="animate-pulse w-full h-80 bg-gray-300"></div>
        )}
      </section>
    </ProtectedRoute>
  );
};

export default Dashboard;

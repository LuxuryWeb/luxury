import Loader from "@/components/Loader/Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface IProtect {
  children: React.ReactNode;
  requiresAuth: boolean;
  profile?: boolean;
}

const ProtectedRoute = ({ children, requiresAuth, profile }: IProtect) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return (
      <section className="w-full h-full flex flex-col items-center justify-center p-24">
        <Loader />
      </section>
    );

  if (requiresAuth && !session) {
    // Redirect to login if user is not authenticated and authentication is required
    router.replace("/");
    return (
      <section className="w-full h-full flex flex-col items-center justify-center p-24">
        <Loader />
      </section>
    );
  }

  if (
    requiresAuth &&
    session &&
    !profile &&
    session.user.status !== "approved"
  ) {
    router.replace("/no-disponible");
    return (
      <section className="w-full h-full flex flex-col items-center justify-center p-24">
        <Loader />
      </section>
    );
  }

  // User is authenticated or authentication is not required, render children
  return <>{children};</>;
};

export default ProtectedRoute;

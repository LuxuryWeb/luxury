"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const { data: session } = useSession();
  const router = usePathname();
  const pathSegments = router.split("/").filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumbs" className="flex">
      <ol
        className={`px-6 py-1 m-0 bg-zinc-800  rounded-full sombra ${
          session ? "" : "hidden"
        }`}
      >
        <li className="inline-flex text-white items-center">
          <Link href="/">
            <div className="text-white font-semibold hover:underline">
              Inicio
            </div>
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="inline-flex items-center ">
            <span className="mx-1 text-white">/</span>
            <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
              <div className="text-white font-semibold hover:underline capitalize">
                {segment}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import Link from "next/link";
import { useState } from "react";

const MenuHamburger = ({ admin }: { admin: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div
        className={`${
          isOpen ? "bg-zinc-800 absolute p-5 -top-5 -right-4 w-screen" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-end h-16">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-xl text-slate-600  transition duration-500 ease-in-out"
                aria-expanded="false"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-10 w-10`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-10 w-10`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Contenido del menú hamburguesa */}
        <div
          className={`${
            isOpen ? "absolute" : "hidden"
          } inset-x-0 bg-zinc-800 z-10 p-3 transition-transform transform ease-out duration-500`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/profile"
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Perfil
            </Link>
            {admin && (
              <Link
                href="/dashboard"
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuHamburger;

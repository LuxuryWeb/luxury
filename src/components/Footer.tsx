import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1200px] mx-auto my-2">
      <div className="py-5 bg-zinc-800 rounded-3xl flex items-center justify-center flex-col sm:flex-row">
        <div className="flex justify-center items-center"></div>
        <div className="flex gap-2">
          <Image src="/imgs/logo.png" alt="logo" width={170} height={170} />
          <button className="transform hover:scale-110 transition duration-500 ease-in-out p-2">
            <Image
              src="/icons/instagram.svg"
              alt="logo"
              width={30}
              height={30}
            ></Image>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

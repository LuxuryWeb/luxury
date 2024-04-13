"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { modulos } from "../../../../../utils/modulos";
import Image from "next/image";

const ClassPage = ({ params }: any) => {
  const classes =
    modulos.find((modulo) => modulo.link === params.modules)?.classes || [];

  const idPath = params.class.split("_")[1];

  const clase = classes.find((clas) => clas.id === idPath) as any;

  const getIconImg = (img: string) => {
    switch (img) {
      case "xlsx":
        return "/icons/excel.svg";
      case "png":
        return "/icons/imag.svg";
      case "zip":
        return "/icons/archive.svg";
      case "pdf":
        return "/icons/pdf.svg";
      case "docx":
        return "/icons/docx.svg";
      default:
        return "";
    }
  };

  return (
    <section className="w-full h-full  flex flex-col justify-center items-center text-white gap-5">
      <section className="w-full h-full flex flex-col justify-center items-center mb-2">
        <div className="w-full h-full flex justify-center items-center">
          {clase.video ? (
            <VideoPlayer src={clase.src} />
          ) : (
            <iframe src={clase.src} width="100%" height="100%"></iframe>
          )}
        </div>
      </section>
      {clase.component && (
        <div className="w-full justify-start">
          <h3>
            {Array.isArray(clase.component) ? "Complementos" : "Complemento"}
          </h3>
          <div className="my-5 flex w-full gap-5">
            {Array.isArray(clase.component) && clase.component.length > 0 ? (
              clase.component.map((res: any, i: any) => (
                <div key={i} className="">
                  <a href={res.src} download>
                    <button className="bg-zinc-200 hover:bg-slate-400 hover:text-white text-slate-800 font-bold py-10 px-10 rounded-xl transition duration-500 ease-in-out relative z-10">
                      <Image
                        height={40}
                        width={40}
                        src={getIconImg(res.type)}
                        alt={getIconImg(res.type)}
                      />
                      <Image
                        height={28}
                        width={28}
                        src="/imgs/download.png"
                        alt="Imagen Descarga Hover"
                        className="absolute inset-0 w-full h-full p-7 object-cover rounded-xl opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-50 transform scale-125 hover:scale-90 transition-transform duration-2000 ease-in-out"
                      />
                    </button>
                  </a>
                </div>
              ))
            ) : (
              <div className="w-full justify-start">
                <a href={clase.component.src} download>
                  <button className="bg-zinc-200 hover:bg-slate-400 hover:text-white text-slate-800 font-bold py-10 px-10 rounded-xl transition duration-500 ease-in-out relative z-10">
                    <Image
                      height={40}
                      width={40}
                      src={getIconImg(clase.component.type)}
                      alt={getIconImg(clase.component.type)}
                    />
                    <Image
                      height={28}
                      width={28}
                      src="/imgs/download.png"
                      alt="Imagen Descarga Hover"
                      className="absolute inset-0 w-full h-full p-7 object-cover rounded-xl opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-50 transform scale-125 hover:scale-90 transition-transform duration-2000 ease-in-out"
                    />
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ClassPage;

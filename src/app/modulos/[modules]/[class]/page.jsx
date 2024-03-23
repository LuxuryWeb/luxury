"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { modulos } from "../../../../../utils/modulos";

const ClassPage = ({ params }) => {
  const classes =
    modulos.find((modulo) => modulo.link === params.modules)?.classes || [];

  const idPath = params.class.split("_")[1];

  const clase = classes.find((clas) => clas.id === idPath);

  return (
    <section className="w-full h-full  flex flex-col justify-center items-center text-white gap-5">
      <section className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          {clase.video ? (
            <VideoPlayer src={clase.src} />
          ) : (
            <iframe src={clase.src} width="100%" height="900px"></iframe>
          )}
        </div>
      </section>
    </section>
  );
};

export default ClassPage;

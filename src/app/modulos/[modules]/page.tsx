import CardClass from "@/components/CardClass";
import Link from "next/link";
import { modulos } from "../../../../utils/modulos";
import Image from "next/image";
import { Key, cache } from "react";
import { classes, components, modules } from "@prisma/client";
import { prisma } from "@/app/lib/prisma";

const getData = async (linkName: string) => {
  const modules = await prisma.modules.findFirst({
    where: {
      link: {
        equals: linkName
      }
    },
    relationLoadStrategy: 'join',
    include: {
      classes: {
        include: {
          components: true
        },
        orderBy: {
          order: 'asc'
        }
      }
    }
  });

  return { modules }
}

const ModulesPage = async ({ params }: { params: { modules: string } }) => {
  const { modules: linkName } = params;
  const data = await getData(linkName)
  const { modules: module } = data
  const classes = module?.classes;
  const complements = [] as Array<components>;

  if (classes) {
    for (let i = 0; i < classes.length; i++) {
      const cls = classes[i]
      complements.push(...cls.components)
    }
  }

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
    <div>
      <div className="flex gap-2 items-center">
        <h2 className="font-medium text-2xl text-white">
          Bienvenido al módulo {module?.name}
          {/* <span className="font-normal capitalize">{params.modules}</span> */}
        </h2>
        <Image
          src={('https://upload.luxurygold.click' + module?.image) || '/public/default.png'}
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      {/* <h3 className="my-2 text-xl text-white">Clases:</h3> */}
      <h3 className="my-2 text-xl text-white">Clases:</h3>
      <section className="flex flex-wrap gap-5 py-5justify-center items-center flex-col md:flex-row text-black my-5">
        {classes?.map(
          (res: { name: Key | null | undefined; id: any; image: string }) => (
            <Link
              key={res.name}
              href={`/modulos/${linkName}/${res.id}`}
            >
              <CardClass name={res.name} image={'https://upload.luxurygold.click' + res.image}></CardClass>
            </Link>
          )
        )}
      </section>
      {complements?.length && complements?.length > 0 && (
        <section>
          <h3 className="my-5 text-xl text-white">Complementos:</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {complements?.map((res, i) => (
              <a key={i} href={process.env.API_URL + res.src} download>
                <button className="bg-zinc-200 hover:bg-slate-400 hover:text-white text-slate-800 font-bold py-10 px-10 rounded-xl transition duration-500 ease-in-out relative z-10">
                  <Image
                    height={40}
                    width={40}
                    src={getIconImg(res.type)}
                    alt={res.type}
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
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ModulesPage;

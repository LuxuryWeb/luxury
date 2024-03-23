import Link from "next/link";

const NoDisponible = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="background text-center text-xl text-white bg-zinc-800 px-10 py-10">
          No puedes ver el contenido hasta ser aceptado!
        </h2>
        <Link href={"/"}>
          <button className="bg-black hover:sombraGold text-white py-3 px-10 rounded-3xl transition duration-500 ease-in-out transform hover:scale-105">
            Volver al inicio
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NoDisponible;

import Image from "next/image";

const CardClass = ({ name, image }: any) => {
  return (
    <div className="h-[270px] w-[370px] bg-white rounded-3xl flex flex-col sombra">
      <Image
        height={300}
        width={370}
        src={image}
        alt="cover ejemplo"
        className="rounded-t-3xl"
      />
      <div className="flex w-full h-[120px] justify-center items-center text-lg font-bold">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CardClass;

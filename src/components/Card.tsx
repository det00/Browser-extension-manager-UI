import { useState } from "react";

const Card = ({logo, name, description, isActive}: {logo: string, name: string, description: string, isActive: boolean}) => {
  const [activo, setActivo] = useState(isActive);
  return (
    <div className="flex flex-col justify-between bg-neutral-0 h-48 w-full rounded-2xl shadow-lg p-4">
      <div className="flex flex-row gap-2">
        <img
          src={logo}
          className="size-14"
          alt=""
        />
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-neutral-600">
            {description}
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center h-fit">
        <button className="!outline-none !flex !items-center !border-2 !border-neutral-300 !rounded-3xl !py-1 !px-2 !text-sm">
          Remove
        </button>
        <span
          onClick={() => setActivo(!activo)}
          className={`flex  w-10 h-5 rounded-full cursor-pointer ${
            activo ? "justify-end bg-red-700" : "justify-start bg-neutral-300"
          }`}
        >
          <span
            className={`bg-white w-5 h-5 rounded-full border ${
              activo ? "border-red-700" : "border-neutral-300"
            }`}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default Card;

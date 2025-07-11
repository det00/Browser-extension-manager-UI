import { useState } from "react";
import Badge from "../components/Badge";
import Card from "../components/Card";
import data from "/data.json";

const BrowserExtensions = () => {
  const [temaActivo, setTemaActivo] = useState("light");
  const cambiarTema = () => {
    document.documentElement.classList.toggle("dark");
    setTemaActivo(temaActivo === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-evenly px-24 bg-[image:var(--light-gradient)] dark:bg-[image:var(--dark-gradient)]">
      <header className="flex h-14 bg-neutral-0 dark:bg-neutral-800 rounded-2xl items-center justify-between p-4 shadow-lg">
        <img className="color-white" src="./assets/images/logo.svg" alt="" />
        <div className="flex items-center">
          <button
            onClick={cambiarTema}
            className="!p-2 !bg-neutral-100 dark:!bg-neutral-700 !border-none focus:!outline-none"
          >
            <img
              src={
                document.documentElement.classList.contains("dark")
                  ? "./assets/images/icon-sun.svg"
                  : "./assets/images/icon-moon.svg"
              }
              alt=""
            />
          </button>
        </div>
      </header>
      <div className="flex flex-col justify-between gap-6">
        <div className="flex justify-between h-6 items-center">
          <span className="font-bold text-2xl">Extensions List</span>
          <div className="flex gap-2 h-10">
            <Badge texto="All" />
            <Badge texto="Active" />
            <Badge texto="Inactive" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item: any) => (
            <Card
              key={item.name}
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowserExtensions;

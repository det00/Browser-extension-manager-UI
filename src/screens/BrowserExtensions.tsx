const BrowserExtensions = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center px-24 bg-[linear-gradient(180deg,#040918_0%,#091540_100%)]">
      <header className="flex h-14 bg-neutral-800 rounded-2xl items-center justify-between p-4">
        <img className="color-white" src="./assets/images/logo.svg" alt="" />
        <div className="flex items-center">
          <button className="!p-2">
            <img src="./assets/images/icon-sun.svg" alt="" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default BrowserExtensions;

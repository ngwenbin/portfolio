import { Hero, Terminal } from "~/components";
import { Outlet } from "@remix-run/react";

const RootPage = () => {
  return (
    <div className="grid grid-cols-1 px-6 h-full w-full sm:max-w-[75%] mx-auto lg:grid-cols-2 py-10 ">
      <div className="flex flex-col h-full lg:max-w-[484px] justify-center p-5 gap-y-5 justify-self-end">
        <div className="lg:hidden grow">
          <Outlet />
        </div>
        <div className="hidden lg:block">
          <Hero />
        </div>
        <Terminal />
      </div>
      <div className="hidden lg:flex p-5 justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;

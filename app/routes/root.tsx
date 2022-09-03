import { Hero, Terminal } from "~/components";
import { Outlet } from "@remix-run/react";

const RootPage = () => {
  return (
    <div className="grid grid-cols-1 h-full w-full md:max-w-[75%] mx-auto lg:grid-cols-2 py-10">
      <div className="flex flex-col h-full lg:max-w-[484px] justify-center gap-y-5 min-w-max">
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

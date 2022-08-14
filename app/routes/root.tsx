import { Hero, Terminal } from "~/components";
import { Outlet } from "@remix-run/react";

const RootPage = () => {
  return (
    <div className="block px-6 h-full w-full sm:max-w-[75%] mx-auto sm:flex py-10">
      <div className="flex flex-col sm:w-[400px] h-full justify-center">
        <div className="block sm:hidden grow">
          <Outlet />
        </div>
        <div className="hidden sm:block">
          <Hero />
        </div>
        <Terminal />
      </div>
      <div className="hidden sm:block w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;

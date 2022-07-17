import { Navbar } from "~/components";
import type { NavItem } from "~/components";
// import blob from "~/images/blob.webp";
import pageKeys from "~/content/pageKeys.json";
import { Outlet } from "@remix-run/react";
import Typewritter from "~/components/Typewritter";

const navItems: NavItem[] = [
  {
    name: "Projects",
    route: "projects",
  },
  {
    name: "Skills",
    route: "skills",
  },
  {
    name: "Experience",
    route: "experience",
  },
  {
    name: "Contact me",
    route: "contact-me",
  },
];

const RootPage = () => (
  <div className="bg-gradient-to-r from-black to-[#212358] flex flex-col h-screen">
    {/* <img
      src={blob}
      alt=""
      className="w-[50%] h-auto absolute blur-[24px] md:blur-[32px] lg:blur-[48px] xl:blur-[56px] 2xl:blur-[80px]"
    />
    <div className="absolute h-screen flex w-full flex-col items-start ">
      <Navbar
        navItems={navItems}
        linkClassName="text-white font-bold text-lg"
        className="w-full justify-end gap-x-32 pr-16 my-10"
      />
      <div className="xl:pl-24 xl:pt-40 pl-10 pt-16 pr-10">
        <div className="hero-big drop-shadow-md">
          {pageKeys.titles.heroGreeting}
        </div>
        <div className="flex flex-col items-start space-y-2 xl:space-y-4 mt-6 xl:mt-10 hero-body">
          <p>{pageKeys.titles.heroIntro}</p>
          <p>{pageKeys.titles.heroSubIntro[0]}</p>
        </div>
      </div>
    </div> */}
    <Navbar
      navItems={navItems}
      linkClassName="font-bold text-lg"
      className="w-full justify-end gap-x-32 pr-16 my-10"
    />
    <div className="flex h-full">
      <div className="xl:pl-24 xl:pt-40 pl-10 pt-16 pr-10">
        <div className="hero-big drop-shadow-md">
          {pageKeys.titles.heroGreeting}
        </div>
        <div className="flex flex-col items-start space-y-2 xl:space-y-4 mt-6 xl:mt-10 hero-body">
          <p>{pageKeys.titles.heroIntro}</p>
          <Typewritter strings={pageKeys.titles.heroSubIntro} />
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </div>
);

export default RootPage;

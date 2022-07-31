import { Navbar } from "~/components";
import type { NavItem } from "~/components";
import pageKeys from "~/content/pageKeys.json";
import { Outlet, Link } from "@remix-run/react";
import Typewritter from "~/components/Typewritter";

const navItems: NavItem[] = [
  {
    name: "show.projects()",
    route: "projects",
  },
  {
    name: "show.skills()",
    route: "skills",
  },
  {
    name: "show.experience()",
    route: "experience",
  },
  {
    name: "show.contact()",
    route: "contact-me",
  },
];

const RootPage = () => (
  <div className="flex flex-col h-screen w-full sm:max-w-[70%] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 px-8 h-full">
      <div className="flex flex-col self-center">
        <div className="hero-big pb-10">{pageKeys.titles.heroGreeting}</div>
        <div className="flex flex-col items-start space-y-2 hero-body h-60 sm:h-40">
          <p>{pageKeys.titles.heroIntro}</p>
          <Typewritter
            strings={pageKeys.titles.heroSubIntro}
            className="text-[#90AECF]"
          />
        </div>
        <Navbar
          navItems={navItems}
          linkClassName="text-sm text-[#D8E5E3]"
          className="pt-10"
        />
      </div>
      <div className="hidden lg:flex">
        <Outlet />
      </div>
    </div>
  </div>
);

export default RootPage;

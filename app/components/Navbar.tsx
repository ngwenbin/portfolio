import React from "react";
import { Link } from "@remix-run/react";
import { clsx } from "clsx";

export interface NavItem {
  name: string;
  route: string;
}

interface NavBarProps {
  navItems: NavItem[];
  className?: string;
  linkClassName?: string;
}

const Navbar = ({ navItems, className, linkClassName }: NavBarProps) => (
  <div className={clsx("flex flex-row", className)}>
    {navItems.map((item, idx) => (
      <Link to={item.route} key={idx} className={linkClassName}>
        {item.name}
      </Link>
    ))}
  </div>
);

export default Navbar;

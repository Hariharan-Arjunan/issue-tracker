"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const pathName = usePathname();
  const navLinks = [
    { label: "Dashboard", href: "/" },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 mb-4 px-5 h-14 border-b items-center ">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 ">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.href}>
              {/* <Link
                  className={`${
                    pathName === navLink.href
                  } ? " text-zinc-900" : " text-zinc-500" hover:text-zinc-800 transition-colors`}
                  href={navLink.href}
                >
                  {navLink.label}
                </Link> */}
              <Link
                className={classNames({
                  "text-zinc-500": navLink.href !== pathName,
                  "text-zinc-900": navLink.href === pathName,
                  "hover:text-zinc-800 transition-colors": true,
                })}
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

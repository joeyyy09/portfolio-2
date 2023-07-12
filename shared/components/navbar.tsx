import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "react-feather";
import { navlinks } from "../utils/constants";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Link href={href}>
        <li
          className={`
          px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
          ${router.asPath === href ? "border-b-1 md:border-none" : ""} 
          `}
        >
          <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
            {title}
          </p>
          <img
            src="/images/vectors/nav_active.svg"
            alt="nav-active"
            className={`
            hidden md:block md:opacity-0
            ${router.asPath === href && "md:opacity-100 md:w-100"}
            `}
          />
        </li>
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const addShadowtoNav = () => {
    window.scrollY >= 100
      ? setisScreenScrolled(true)
      : setisScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", addShadowtoNav);
    return () => {
      window.removeEventListener("scroll", addShadowtoNav);
    };
  }, []);

  return (
    <div
      className={` bg-blue w-full fixed z-30
      ${isScreenScrolled && "shadow-2xl"}
      `}
    >
      <nav className=" block md:flex justify-between items-center p-2">
        <div className="flex justify-between ">
          <div>
            <Link href="/">
              <img
                src="/images/logo1.png"
                alt="logo"
                className={`${
                  isScreenScrolled ? 'w-8 md:w-14 ease-in-out md:ml-16 float-left' : 'ml-4 md:ml-16 w-12 md:w-16'
                } pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer`}
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white mr-4 focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        <div
          className={
            showMobileNav ? "block transition-all" : "hidden md:block"
          }
        >
          <ul className="md:flex md:flex-row w-full pt-6 md:pt-0 ">
            {navlinks.map((item) => {
              return (
                <NavItem title={item.title} href={item.href} key={item.href} />
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

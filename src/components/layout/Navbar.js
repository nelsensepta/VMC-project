import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Script from "next/script";
import { Cross, Logo, NavMenu } from "../utils/icons";

export default function Navbar() {
  const [canvas, setCanvas] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menus, setMenus] = useState();
  useEffect(() => {
    setMenus(
      typeof window !== "undefined"
        ? localStorage.getItem("menus")
          ? JSON.parse(localStorage.getItem("menus"))
          : []
        : []
    );
  }, []);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset < screen.height / 10 ? false : true);
      return () => (window.onscroll = null);
    };
  }

  return (
    <header
      className={`top-0 inset-x-0 fixed z-50 bg-white transition-all  duration-500  ${
        isScrolled ? "md:bg-black" : "md:bg-black/0"
      }`}
    >
      <nav className="container grid grid-cols-6 grid-flow-col py-1 items-center md:relative">
        <div className="md:col-span-0 col-span-1 flex justify-start items-center">
          <Link href="/">
            <a>
              <Logo className="w-20 lg:w-32" />
            </a>
          </Link>
        </div>
        <ul
          className={`${
            canvas ? "left-0" : "-left-full"
          } absolute top-0 w-full text-white bg-black/90 md:bg-transparent md:h-auto md:static md:flex flex col-start-2 md:col-span-5 lg:col-span-4 gap-12 justify-center items-center md:gap-7 xl:gap-15 flex-col md:flex-row text-md h-screen p-5 duration-400 transition-all`}
        >
          <hr className="w-full border-t-2 border-primary text-blue-300  md:hidden" />
          {menus &&
            menus.map((menu) => (
              <li
                className="cursor-pointer hover:underline"
                key={menu.id}
                onClick={() => setCanvas(!open)}
              >
                <Link href={`${menu.url}`} passHref>
                  <a className="tracking-[0.1em]">{menu.name}</a>
                </Link>
              </li>
            ))}
          <li>
            <button
              aria-label="button-close"
              className="md:hidden absolute top-4 right-4 text-white"
              onClick={() => setCanvas(false)}
            >
              <Cross />
            </button>
          </li>
          <hr className="w-full border-t-2 border-primary text-blue-300  md:hidden" />
        </ul>
        <div className="md:hidden col-span-1 col-start-6 flex items-center justify-end">
          <button
            aria-label="menu"
            className="w-12"
            onClick={() => setCanvas(true)}
          >
            <NavMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}

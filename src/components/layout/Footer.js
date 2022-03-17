import React from "react";
import Link from "next/link";
import { Facebook, Google, Instagram } from "../utils/icons";

export default function Footer() {
  return (
    <footer className="container font-second mt-24 text-xl text-second-light/80">
      <span className="text-start">Contact Us :</span>
      <div className="flex justify-start items-start gap-2 mt-2 flex-col">
        <Link href="#">
          <a className="flex gap-2 hover:text-primary">
            <Google />
            virtualmovesco@gmail.com
          </a>
        </Link>
        <Link href="#">
          <a className="flex gap-2 hover:text-primary">
            <Instagram />
            @virtualmoveco
          </a>
        </Link>
        <Link href="#">
          <a className="flex gap-2 hover:text-primary">
            <Facebook />
          </a>
        </Link>
      </div>
      <div className="flex gap-5 text-second-light/70 mt-5">
        <Link href="#">
          <a>Terms & Agreements</a>
        </Link>
        <Link href="#">
          <a>Privacy Policy</a>
        </Link>
      </div>
      <div className="flex justify-center items-center p-10">
        <span className="text-second-light/70">
          &copy; {new Date().getFullYear()} Virtual Moves Co.
        </span>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
export default function Sosmed({ sosmed }) {
  return sosmed.map((item, i) => (
    <Link href={item.link} key={i}>
      <a
        target="_blank"
        className={`bg-primary p-5 rounded-full text-white z-30  first:bg-blue-500 absolute last:bg-slate-600 odd:bg-lime-400 even:bg-red-500`}
      >
        {/* <Linked /> */}
        {/* {item.type} */}
        {i}
      </a>
    </Link>
  ));
}

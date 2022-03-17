import React from "react";
import Image from "next/image";
import { Eye } from "../utils/icons";
import Link from "next/link";

export default function Card({ item }) {
  return (
    <div className="flex sm:flex-col flex-row-reverse gap-5 justify-start sm:items-start items-center">
      <div className="w-1/3 sm:w-full">
        <Image
          src={`${item?.image}`}
          width={420}
          alt={`${item.title}`}
          height={420}
          placeholder="blur"
          blurDataURL={item.image}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3 w-3/4 sm:w-full">
        <Link href={`/news/${item.slug}`}>
          <a className="text-2xl font-semibold">{item.title}</a>
        </Link>
        <span className="text-lg text-second">
          John Doe | Monday, January 1st 2022
        </span>
        <div className="flex gap-3 items-center">
          <Eye className="w-8 sm:w-10 h-auto" />
          <span className="text-lg text-second ">1M views</span>
        </div>
      </div>
    </div>
  );
}

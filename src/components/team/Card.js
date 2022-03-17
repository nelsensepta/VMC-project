import { useState } from "react";
import Image from "next/image";
import { Linked, Plus } from "../utils/icons";
import Link from "next/link";
import Sosmed from "./Sosmed";

export default function Card({ team }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative rounded-full">
        <div className="flex w-full">
          <Image
            src={`${team.imageUrl}`}
            width={400}
            height={400}
            alt={`${team.name}`}
            className="object-cover rounded-full"
          />
          {open &&
            team.socialMedia.map((value, i) => (
              <Link href={value.link} key={i}>
                <a
                  target="_blank"
                  className={`bg-primary p-5 md:p-3 absolute rounded-full text-white z-30 bottom-32 md:bottom-20 md:-right-5 -right-8`}
                >
                  <Linked />
                </a>
              </Link>
            ))}
        </div>
        <button
          aria-label="Plus"
          onClick={() => setOpen(!open)}
          className={`absolute bg-primary p-7 md:p-5  rounded-full text-white  bottom-3 right-6 ${
            open && "bg-second"
          }`}
        >
          <Plus
            className={`w-10 h-10 ${
              open ? "rotate-45" : "rotate-0"
            } duration-200  transition`}
          />
        </button>

        {/* <div className="space-y-9 flex">
          <Sosmed sosmed={team.socialMedia} />
        </div> */}
      </div>
      <span className="text-3xl font-semibold">{team.name}</span>
      <span className="text-2xl">{team.position}</span>
    </div>
  );
}

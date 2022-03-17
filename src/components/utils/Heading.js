import React from "react";

export default function Heading({ title, second, desc }) {
  return (
    <div className="flex flex-col gap-4 tracking-[0.15em] text-center w-full">
      <span className="sm:font-semibold sm:text-6xl text-3xl font-medium">
        {title}
      </span>
      <span className="font-bold text-primary sm:text-5xl mt-5 uppercase text-xl">
        {second}
      </span>
      <span className="text-second sm:text-2xl text-sm font-medium">
        {desc}
      </span>
    </div>
  );
}

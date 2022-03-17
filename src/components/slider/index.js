import React from "react";
import Image from "next/image";

const Slider = ({ slider }) => {
  return (
    <div className="flex">
      <div
        className="w-full sm:min-h-screen h-full"
        // bg-[url('https://res.cloudinary.com/manh21/image/upload/v1645209749/yh7tqcogwu6aybe1ndu1.jpg')]
        // style={{
        //   backgroundImage: `url(${items[2].imageUrl})`,
        // }}
      >
        <div className="hidden sm:block">
          <Image
            src={`${slider[2].imageUrl}`}
            layout="fill"
            alt={`${slider[2].name}`}
            className="brightness-[0.40] object-cover object-center"
          />
        </div>
        <div className="flex absolute bottom-20 left-20 flex-col gap-4">
          <span className="text-white font-second  tracking-[.5em]">
            {slider[2].name} --
          </span>
          <span className="text-white text-sm tracking-[.3em] font-light">
            {slider[2].description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;

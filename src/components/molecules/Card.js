import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-semibold tracking-[0.2em]">Arts & Culture</span>
      <Image src="/img/Rectangle.png" alt="image" width={343} height={220} />
    </div>
  );
}

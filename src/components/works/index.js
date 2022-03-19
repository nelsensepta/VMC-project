import Heading from "../utils/Heading";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { useState } from "react";
import Modal from "./Modal";
import { Cross } from "../utils/icons";

export default function Works({ works }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (item) => {
    selected !== item && setSelected(item);
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen}>
          <div className="flex bg-white sm:justify-center justify-start sm:items-center  overflow-hidden rounded-xl gap-0 sm:gap-5 sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full h-72">
              <Image
                src={`${selected.imageUrl}`}
                className="object-cover cursor-pointer"
                width={400}
                height={450}
                placeholder="blur"
                layout="responsive"
                blurDataURL={selected.imageUrl}
                alt={`${selected.name}`}
              />
            </div>
            <div className="sm:w-1/2 w-full text-black flex flex-col justify-start sm:gap-20 sm:pr-5 h-full p-5 gap-5">
              <span className="text-3xl font-semibold">{selected.name}</span>
              <span className="text-xl hidden md:block">
                {selected.description}
              </span>
            </div>
            <button
              className="absolute right-5 top-5 text-white sm:text-black"
              onClick={() => setOpen(!open)}
            >
              <Cross />
            </button>
          </div>
        </Modal>
      )}
      <section className="mx-auto mt-32 container" id="work">
        <Heading
          title="Latest Works"
          second="A Bunch of Arts"
          desc="lorem ipsum dolor sit amet"
        />
        {/* Mansory Grid */}
        <Masonry
          breakpointCols={{ default: 4, 1024: 3, 768: 2, 640: 1 }}
          className="my-masonry-grid gap-4"
          columnClassName="my-masonry-grid_column"
        >
          {works.map((work, i) => {
            return (
              <div className="w-full" key={work.id}>
                <Image
                  src={`${work.imageUrl}`}
                  onClick={() => handleClick(work)}
                  className="object-cover cursor-pointer"
                  width={work.size.width}
                  height={work.size.height}
                  placeholder="blur"
                  layout="responsive"
                  blurDataURL={work.imageUrl}
                  alt={`${work.name}`}
                />
              </div>
            );
          })}
        </Masonry>

        <div className="flex justify-center items-center">
          <Link href="/works">
            <a className="btn btn-primary font-bold text-[20px] tracking-widest">
              View All Works
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

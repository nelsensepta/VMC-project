import React from "react";
import Heading from "../utils/Heading";
import { Logo, Quote } from "../utils/icons";

export default function About() {
  return (
    <section className="sm:mt-72 mt-36 relative mx-auto" id="about_us">
      <div className="flex container items-center justify-between gap-5 flex-col-reverse sm:flex-row ">
        <div className="sm:w-3/4 w-full">
          <Heading
            title="About Us"
            second="Virtual Moves Co"
            desc="The Right Digital Services for your Business"
          />
          <div className="flex items-center justify-center sm:absolute sm:w-1/4 h-full w-full  bg-black sm:rounded-tl-[16rem] sm:right-0 sm:top-0 sm:p-0 p-8 mt-10 sm:mt-0">
            <Logo className="w-72" />
            {/* <div className="flex"></div> */}
          </div>
          <div className="flex justify-between sm:mt-36 mt-3">
            <span className="items-start sm:flex w-1/12 hidden">
              <Quote />
            </span>
            <p className="sm:text-4xl sm:w-11/12 grow items-end sm:pt-16 pt-3 text-xl w-full tracking-widest sm:tracking-normal">
              We provide the best service <br className="hidden sm:block" />
              in the field of
              <strong> Web development</strong>
              <br className="hidden sm:block" /> and <strong>Design</strong>{" "}
              with the best experience
              <br className="hidden sm:block" />
              to handle all your problems to a result
              <br className="hidden sm:block" />
              that will satisfy you!
            </p>
          </div>
          {/* <div className="flex mt-5 w-full sm:hidden">
            <Image
              src="/building/city3.jpg"
              height={500}
              width={500}
              className="object-cover"
            />
          </div> */}
          <p className="tracking-widest text-xl mt-5 text-justify sm:hidden block">
            Our work encompasses graphics and identity, products and packaging,
            exhibitions and installations, websites and digital experiences,
            advertising and communications, sound and motion. Our 23 partners
            are all practicing designers, and whether working collaboratively or
            independently, they do so in friendship.
            <br />
            <br />
            Our structure is unique. We are the only major design studio where
            the owners of the business are the creators of the work and serve as
            the primary contact for every client. This reflects our conviction
            that great design cannot happen without passion, intelligence and —
            above all — personal commitment, and is demonstrated by a portfolio
            that spans five decades, many industries, and clients of every size.
          </p>
          <div className="sm:flex justify-center items-center sm:mt-16 hidden">
            <div className="flex items-center justify-center gap-2 mt-16 w-1/3">
              <div className="inline-block text-center mx-auto border-b-4 w-3/4 border-primary"></div>
              <div className="inline-block text-center mx-auto border-b-4 w-1/4"></div>
              <div className="inline-block text-center mx-auto border-b-4 w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

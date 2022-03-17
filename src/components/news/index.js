import React from "react";
import Heading from "../utils/Heading";
import Card from "./Card";

export default function News({ news }) {
  return (
    <section className="container mx-auto mt-56" id="news">
      <Heading
        title="Latest News"
        second="Explore VMC' S News"
        desc="learn more about out company"
      />
      <div className="flex items-center justify-between mt-16 w-full">
        <div className="inline-block text-center mx-auto border-b-4 w-1/2 border-primary">
          <button>Recent</button>
        </div>
        <div className="inline-block text-center mx-auto border-b-4 w-1/2">
          <button>Popular</button>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-5 mt-16">
        {news.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

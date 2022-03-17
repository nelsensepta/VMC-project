import React from "react";
import Card from "../components/molecules/Card";
import Head from "next/head";

export default function works() {
  return (
    <>
      <Head>
        <title>Works &mdash; VMC</title>
        <meta
          name="description"
          content="Meta description content goes here..."
        />
      </Head>
      <section className="container mt-32">
        <div className="flex items-center justify-between mt-16 w-full">
          <div className="inline-block text-center mx-auto border-b-4 w-1/2 border-primary pb-2">
            <button>By Client</button>
          </div>
          <div className="inline-block text-center mx-auto border-b-4 w-1/2 pb-2">
            <button>By Work</button>
          </div>
          <div className="inline-block text-center mx-auto border-b-4 w-1/2 pb-2">
            <button>All Project</button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-8">
          {new Array(5).fill(1).map((item, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

import React from "react";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import { Eye } from "../../components/utils/icons";
import Head from "next/head";
// import Error from "../_error";

export default function Detail({ detail }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Meta description content goes here..."
        />
        <title>VMC &mdash; {detail.slug}</title>
      </Head>
      <section className="container">
        <div className="lg:max-w4xl w-full mx-auto mb-10">
          <Image
            src={detail.image}
            width={400}
            height={250}
            className="object-cover"
            layout="responsive"
            placeholder="blur"
            quality={100}
            alt={detail.title}
            blurDataURL={detail.image}
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-3 w-3/4">
          <span className="text-sm text-second mt-5">
            John Doe | Monday, January 1st 2022
          </span>
          <div className="flex gap-3">
            <Eye className="w-7 h-7" />
            <span className="text-sm text-second my-auto">1M views</span>
          </div>
        </div>
        <div className="inline-block w-full mt-5">
          <span className="text-3xl font-semibold">{detail.title}</span>
        </div>
        <article dangerouslySetInnerHTML={{ __html: detail.body }}></article>
      </section>
    </>
  );
}

export async function getServerSideProps({ params: { slug } }) {
  const detail = await fetchAPI(`/news/${slug}`);
  if (detail.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      detail,
    },
  };
}

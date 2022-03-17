import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import News from "../components/news";
import { useEffect } from "react";
import Slider from "../components/slider";
import Teams from "../components/team";
import Works from "../components/works";
import { fetchAPI } from "../lib/api";

export default function Home({ slider, teams, news, newWorks, menus }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("menus", JSON.stringify(menus));
    }
  }, [menus]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Meta description content goes here..."
        />
        <title>Home &mdash; VMC</title>
      </Head>
      <Slider slider={slider} />
      <Works works={newWorks} />
      <About />
      <Teams teams={teams} />
      <Contact />
      <News news={news} />
    </>
  );
}

export async function getServerSideProps(context) {
  const [slider, news, teams, works, menus] = await Promise.all([
    fetchAPI("/slider?page=1&perPage=10"), // slider
    fetchAPI("/news?page=1&perPage=3"), // news
    fetchAPI("/teams?page=1&perPage=3"), // teams
    fetchAPI("/works?page=1&perPage=10"), // works
    fetchAPI("/menus?page=1&perPage=10"), // works
  ]);

  if (
    slider.status &&
    news.status &&
    teams.status &&
    works.status &&
    menus.status !== 200
  ) {
    return {
      notFound: true,
    };
  }

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const newWorks = works.data.map((item, i) => {
    if (i === random(0, works.length)) {
      return { ...item, size: { width: 350, height: 250 } };
    } else if (i === random(0, works.length)) {
      return { ...item, size: { width: 350, height: 325 } };
    } else {
      return { ...item, size: { width: 350, height: 400 } };
    }
    return item;
  });

  return {
    props: {
      teams: teams.data,
      news: news.data,
      newWorks,
      slider: slider.data,
      menus: menus.data,
    },
  };
}

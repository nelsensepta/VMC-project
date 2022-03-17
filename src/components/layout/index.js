import Footer from "./Footer";
// import dynamic from "next/dynamic";
import Navbar from "./Navbar";
// import NextNprogress from "nextjs-progressbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

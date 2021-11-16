import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import CallToAction from "../components/callToAction";
import Features from "../components/features";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Header from "../components/header";
import Nav from "../components/nav";
import Testimonies from "../components/testimonies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Free Travel Landing page</title>
        <meta name="description" content="Free landing page made by ctir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Header />
        <About />
        <Features />
        <Gallery />
        <CallToAction />
        <Testimonies />
        <Footer />
      </main>
    </div>
  );
}

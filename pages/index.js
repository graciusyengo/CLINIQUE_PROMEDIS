import Image from "next/image";
import { Inter, Splash } from "next/font/google";

import Header from "@/components/Layouts/Header";
import Main from "@/components/Main";
import Testimonals from "@/components/Testimonals";
import Footer from "@/components/Layouts/Footer"
import Service from "@/components/Service";
import Head from "next/head";
import Topbar from "@/components/Topbar";
import About from "@/components/About"
import Count from "@/components/Count";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
 <Head>
        <title>Clinique Promedis</title>
        <meta
          name="description"
          content="Clinique  Plamedi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico"/>
      </Head>
<Main/>
<About/>
<Count/>
<Service/>
<Testimonals/>
    </>
  );
}

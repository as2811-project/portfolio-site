import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import NavBar from "@/components/Navbar";
import AboutMe from "@/components/About";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;

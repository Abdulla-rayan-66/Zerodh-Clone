import React from "react";
import Awards from "./Awards";
import Hero from "./Hero";
import Stats from "./Stats.js";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;

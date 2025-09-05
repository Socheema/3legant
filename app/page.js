import MainComponent from "../components/mainComponent";
import HeroComponent from "../components/heroComponent";
import Navbar from "../components/navbar";
import NewArrivals from "../components/newArrivals";
import About from "../components/about";

import React from "react";


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <MainComponent />
      <NewArrivals />
      <About />
    </>
  );
}

export default HomePage;

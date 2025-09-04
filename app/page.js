import MainComponent from "../components/mainComponent";
import HeroComponent from "../components/heroComponent";
import Navbar from "../components/navbar";

import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <MainComponent />
    </>
  );
}

export default HomePage;

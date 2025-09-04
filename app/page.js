import HeroComponent from "../components/heroComponent";
import Navbar from "../components/navbar";
HeroComponent;
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroComponent />
    </>
  );
}

export default HomePage;

import MainComponent from "../components/mainComponent";
import HeroComponent from "../components/heroComponent";

import NewArrivals from "../components/newArrivals";
import About from "../components/about";
import Article from "../components/article";
import Newsletter from "../components/newsletter";




function HomePage() {
  return (
    <>
      <HeroComponent />
      <MainComponent />
      <NewArrivals />
      <About />
      <Article />
      <Newsletter />

    </>
  );
}

export default HomePage;

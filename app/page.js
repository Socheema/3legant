import MainComponent from "../components/mainComponent";
import HeroComponent from "../components/heroComponent";

import NewArrivals from "../components/newArrivals";
import About from "../components/about";
import Article from "../components/article";
import Newsletter from "../components/newsletter";




function HomePage() {
  return (
    <>
   <div className="flex flex-col  gap-8">
       <HeroComponent />
      <MainComponent />
      <NewArrivals />
      <About />
      <Article />
      <Newsletter />
   </div>

    </>
  );
}

export default HomePage;

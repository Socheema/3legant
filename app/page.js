import MainComponent from "../components/mainComponent";
import HeroComponent from "../components/heroComponent";
// import Navbar from "../components/navbar";
import NewArrivals from "../components/newArrivals";
import About from "../components/aboutCard";
import Article from "../components/article";
import Newsletter from "../components/newsletter";
// import Footer from "../components/footer";



function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroComponent />
      <MainComponent />
      <NewArrivals />
      <About />
      <Article />
      <Newsletter />
      {/* <Footer/> */}
    </>
  );
}

export default HomePage;

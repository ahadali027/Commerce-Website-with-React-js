import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Category from "./CategorySection/Category";
import Card from "./Product card/Card";
import Footer from "./Footer/Footer";
import TopSeller from "./TopSeller/TopSeller";
import Video from "./Video/Video";
import Overview from "./OverViewSection/Overview";
import Offers from "./Offers/Offers";
import BlogsCard from "./Blogs and insight/BlogsCard";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Category />
      <Card />
      <TopSeller />
      <Video />
      <Overview />
      <Offers />
      <BlogsCard />
      <Footer />
    </>
  );
}

export default App;

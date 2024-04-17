import { useState } from "react";

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
import { FaMessage } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

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

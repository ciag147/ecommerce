import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Rotation from "../components/Rotation";

const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <Categories />
      <Rotation />
      <Products />
      <Newsletter />
      <Footer></Footer>
    </div>
  );
};

export default Home;

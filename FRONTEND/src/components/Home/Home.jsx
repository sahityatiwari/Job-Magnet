import React from "react";
import { useContext } from "react";
// import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import Demo from "./Demo";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  return (
    <>
      <section className="homePage page">
        <HeroSection />
  
      </section>
    </>
  );
};

export default Home;
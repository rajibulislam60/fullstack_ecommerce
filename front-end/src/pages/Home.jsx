import React from "react";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeatureProducts from "../components/FeatureProducts";
import SecondBanner from "../components/SecondBanner";
import OfferBanner from "../components/OfferBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <OfferBanner/>
      <Categorys />
      <SecondBanner />
      <FeatureProducts />
    </div>
  );
};

export default Home;

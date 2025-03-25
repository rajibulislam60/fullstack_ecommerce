import React from "react";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeatureProducts from "../components/FeatureProducts";
import SecondBanner from "../components/SecondBanner";
import OfferBanner from "../components/OfferBanner";
import ThirdBannar from "../components/ThirdBannar";

const Home = () => {
  return (
    <div>
      <Banner />
      <OfferBanner/>
      <Categorys />
      <SecondBanner />
      <FeatureProducts />
      <ThirdBannar/>
    </div>
  );
};

export default Home;

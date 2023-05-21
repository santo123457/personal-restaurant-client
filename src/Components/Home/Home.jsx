import React from "react";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import FoodMenu from "../FoodMenu/FoodMenu";
import ServiceSection from "../ServiceSection/ServiceSection";
import DisplayReview from "../DisplayReview/DisplayReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <FoodMenu></FoodMenu>
      <DisplayReview></DisplayReview>
    </div>
  );
};

export default Home;

import React from "react";


import BannerItem from "./BannerItem";
const Banner = () => {
  const bannerData = [
    {
      image: "https://www.nutraingredients-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-asia.com/article/2018/01/30/hot-and-heavy-does-eating-spicy-food-make-you-fat/7735098-1-eng-GB/Hot-and-heavy-Does-eating-spicy-food-make-you-fat.jpg",
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: "https://media.cnn.com/api/v1/images/stellar/prod/220926161000-04-spicy-dishes-chilli.jpg?c=original&q=w_1280,c_fill",
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: "https://i.insider.com/5fac1b057f8f4200182a644b?width=1136&format=jpeg",
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image:  "https://media.cnn.com/api/v1/images/stellar/prod/220926160908-08-spicy-dishes-mafe.jpg?c=original&q=w_1280,c_fill",
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image:  "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/spicy_chicken_wings_jalapeno-1296x728-header2.jpg?w=1155&h=1528",
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: "https://images.ctfassets.net/4f3rgqwzdznj/lRXYdlP1PCqKrflHbz03l/03e5176623b2c1bbafab91b415a01c3b/spicy-miso-ramen-1179781372.jpg",
      
      prev: 5,
      id: 6,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;

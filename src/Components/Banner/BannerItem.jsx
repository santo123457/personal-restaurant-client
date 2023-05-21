import React from "react";
import "./BannerItem.css";
const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-screen h-screen rounded-xl" />
      </div>
      <div className="absolute  transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white font-mono">
          VEGAN ASIAN
          <br />
          EXPERIENCE
        </h1>
      </div>
      <div className="absolute  transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-xl text-white">
          MONDAY thru FRIDAY 5pm – 11pm <br />
          SATURDAY 10am – 11pm <br />
          SUNDAY closed
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-outline  btn-primary">
          Book Your Table{" "}
        </button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const { itemName, image, details,_id } = item;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="footItem rounded-lg">
        <PhotoProvider>
          <PhotoView src={image}>
            <div class="foodContainer ">
              <img src={image} alt="Avatar" className=""  />
              <div class="middle">
                <div class="text btn btn-primary btn-outline">View</div>
              </div>
            </div>

            {/* <img className={`bg-[url(${image})]`}></img> */}
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-primary">{itemName}</h2>
        <p>Click the button to View Details of This Item</p>
        <div className="card-actions justify-end">
          <Link to={`/food-details/`}>
            <BsArrowRightShort className="text-4xl text-purple-700 cursor-pointer"></BsArrowRightShort>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

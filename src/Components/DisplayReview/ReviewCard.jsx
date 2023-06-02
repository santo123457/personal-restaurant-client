import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, reviewText } = review;
  return (
    <div className=" card w-96 mb-10 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar justify-center">
          <div className="w-20 rounded-full">
            <img src={img} />
          </div>
        </div>
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-center text-sm my-3 w-3/4 m-auto">{reviewText}</p>
        <div className="card-actions justify-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

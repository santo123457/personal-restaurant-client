import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const DisplayReview = () => {
  const fakeReview = [
    {
      _id : 1,
      name : "Omuk hasan",
      img: "https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg",
      reviewText : "A great restaurant with a beautiful environment.All Foods item are so much delicious. "
    },
    {
      _id : 2,
      name : "Tomuk akter",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
      reviewText : "A great restaurant with a beautiful environment.All Foods item are so much delicious. "
    },
    {
      _id : 3,
      name : "Tokta bhai",
      img: "https://d1vwxdpzbgdqj.cloudfront.net/assets/professional-courses/professional-banner-e0c1ba5a4c2d6b53708b17d8c1fc6b79d59e7328e42f6490832acf7511c2a3e3.jpg",
      reviewText : "A great restaurant with a beautiful environment.All Foods item are so much delicious. "
    },
  ]
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-2xl font-mono text-purple-800 text-center font-semibold">
          Corporate Applications
        </h2>
        <h1 className="text-5xl my-5">Top Reviews</h1>
        <p className="text-lg text-gray-500 font-semibold">
          Assertively myocardinate robust e-tailers for extensible human
          capital.
          <br />
          dpropriately benchmark networks.
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-3 px-10" >
        
  {
    fakeReview.map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
  }
        
      </div>

      <button className="btn btn-outline btn-primary block mx-auto ">
        <Link to="/all-reviews">All Reviews</Link>
      </button>
    </div>
  );
};

export default DisplayReview;

import React from "react";
import { Link } from "react-router-dom";

const DisplayReview = () => {
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

      <div className=" grid grid-cols-3">
        <div className=" card w-96 mb-10 bg-base-100 shadow-xl">
          <div className="card-body">
            <div class="avatar justify-center">
              <div class="w-20 rounded-full">
                <img src="https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg" />
              </div>
            </div>
            <h2 className="card-title justify-center">Card title!</h2>
            <p className="text-center">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
                  checked
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
        {/* card 2 */}

        <div className=" card w-96 bg-base-100 mb-10 shadow-xl">
          <div className="card-body">
            <div class="avatar justify-center">
              <div class="w-20 rounded-full">
                <img src="https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg" />
              </div>
            </div>
            <h2 className="card-title justify-center">Card title!</h2>
            <p className="text-center">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
                  checked
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

        {/* card 3 */}

        <div className=" card w-96 mb-10 bg-base-100 shadow-xl">
          <div className="card-body">
            <div class="avatar justify-center">
              <div class="w-20 rounded-full">
                <img src="https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinkst.f8f644e6.fill-750x422.format-jpeg.jpegquality-80.jpg" />
              </div>
            </div>
            <h2 className="card-title justify-center">Card title!</h2>
            <p className="text-center">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
                  checked
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
      </div>

      <button className="btn btn-outline btn-primary block mx-auto ">
        <Link to="/all-reviews">All Reviews</Link>
      </button>
    </div>
  );
};

export default DisplayReview;

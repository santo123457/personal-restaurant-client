import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const FoodMenu = () => {
  return (
    <section>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-mono text-purple-800 text-center font-semibold">
          Corporate Applications
        </h2>
        <h1 className="text-5xl my-5">Food Menu</h1>
        <p className="text-lg text-gray-500 font-semibold">
          Assertively myocardinate robust e-tailers for extensible human
          capital.
          <br />
          dpropriately benchmark networks.
        </p>
      </div>

      <div className="grid col-start-3 grid-cols-2 gap-5 mx-auto my-10 w-10/12">
        {/* menu 1 start */}

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src="https://picsum.photos/800">
                <img src="https://picsum.photos/200" alt="Movie" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to View Details on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link to={`/food-details/`}>
                <BsArrowRightShort className="text-4xl text-purple-700 cursor-pointer"></BsArrowRightShort>
              </Link>
            </div>
          </div>
        </div>

        {/* menu 2 start */}

        {/* no need */}

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src="https://picsum.photos/800">
                <img src="https://picsum.photos/200" alt="Movie" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to View Details on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link to={`/food-details/`}>
                <BsArrowRightShort className="text-4xl text-purple-700 cursor-pointer"></BsArrowRightShort>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src="https://picsum.photos/800">
                <img src="https://picsum.photos/200" alt="Movie" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to View Details on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link to={`/food-details/`}>
                <BsArrowRightShort className="text-4xl text-purple-700 cursor-pointer"></BsArrowRightShort>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src="https://picsum.photos/800">
                <img src="https://picsum.photos/200" alt="Movie" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to View Details on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link to={`/food-details/`}>
                <BsArrowRightShort className="text-4xl text-purple-700 cursor-pointer"></BsArrowRightShort>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;

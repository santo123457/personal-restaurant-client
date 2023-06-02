import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { serviceName, imgUrl, details } = services;
  return (
    <div className="card w-90 h-[500px] bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{details}</p>
        <div className="  ">
          <Link to={`/book-now/`}>
            <button className="btn btn-primary w-full btn-outline">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

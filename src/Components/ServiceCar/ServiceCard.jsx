import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { serviceName, imgUrl, details } = services;
  return (
    <div className="card w-90  bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <Link to={`/book-now/`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

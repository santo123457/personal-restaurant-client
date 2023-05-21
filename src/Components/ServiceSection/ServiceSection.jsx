import React from "react";
import Services from "../Services/Services";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-mono text-purple-800 text-center font-semibold">
          Corporate Applications
        </h2>
        <h1 className="text-5xl my-5">Our Services</h1>
        <p className="text-lg text-gray-500 font-semibold">
          Assertively myocardinate robust e-tailers for extensible human
          capital.
          <br />
          dpropriately benchmark networks.
        </p>
      </div>

      <Services></Services>

      <Link to="/services">
        <button className="btn btn-outline btn-primary block mx-auto mt-10">
          More Services
        </button>
      </Link>
    </div>
  );
};

export default ServiceSection;

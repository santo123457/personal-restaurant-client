import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCar/ServiceCard";


const Services = () => {
const serviceData = useLoaderData();

  return (
    <div className="grid grid-cols-3 w-10/12 gap-5 mx-auto mt-10">
     {
      serviceData.map((services)=><ServiceCard key={services._id} services={services} ></ServiceCard>)
     }
    </div>
  );
};

export default Services;

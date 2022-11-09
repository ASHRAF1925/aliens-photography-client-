import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const Singleservice = useLoaderData();
  console.log(Singleservice);
  return (
    <div className="container mx-auto ">
      <div className="container mx-auto relative">
        <div className="carousel-img">
          <img src={Singleservice.photo} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4">
          <h1 className="text-5xl font-bold text-white">
            {Singleservice.name}
          </h1>
        </div>
      </div>

      <div className=" py-5 text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 Text-gradient ">
        Welcome to <br /> {Singleservice.name}
      </div>

      <div className="bg-gray-500 p-5 border rounded-lg">
        <h1 className="text-left text-5xl font-bold text-white">Description</h1>
        <hr className="my-4 w-3/4 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
        <p className="text-white font-bold text-2xl m-10">{Singleservice.description}</p>

      </div>
    </div>
  );
};

export default ServiceDetails;

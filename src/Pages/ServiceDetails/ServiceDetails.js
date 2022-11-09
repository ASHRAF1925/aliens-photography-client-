import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRating from "../Common_Components/StarRating/StarRating";
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
        <p className="text-white font-bold text-2xl m-10">
          {Singleservice.description}
        </p>
      </div>
      <div className="bg-blue-400 pt-20">
        <p className="text-4xl font-bold">
          Charge for Premimum Quality Service
        </p>
        <hr className="my-4 w-3/4 h-1 mx-auto bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mt-5">
          <div>
            <h1 className="text-2xl font-bold">Price:</h1>
            <p className="text-4xl font-bold">${Singleservice.charge}</p>
          </div>
          <div>
            <ul className="mb-8 space-y-4 text-left  text-gray-900 font-bold dark:text-gray-400">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Professional Photographers</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Photo Editing</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size:{" "}
                  <span className="font-semibold text-xl text-gray-900 dark:text-white">
                    3 Photographer & 2 Editors
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Average User Rating Start */}
      <div className="bg-blue-600 pt-20 pb-10">
        <p className="text-4xl text-right mr-4 font-bold">
          Average User Rating
        </p>
        <hr className="my-4 w-2/4 h-1 ml-auto bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
        <p className="text-3xl">
          {" "}
          <StarRating></StarRating>
        </p>
      </div>
      {/* Average User Rating End */}

      {/* Review Section Start */}

      <div className="bg-blue-700 pt-20 pb-10">
        <h1 className="text-center text-5xl font-bold text-white">User's Review</h1>
        <hr className="my-4 w-3/4 h-1 mx-auto bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
      </div>

      {/* Review Section end */}
    </div>
  );
};

export default ServiceDetails;

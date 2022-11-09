import React from "react";
import { Carousel } from "flowbite-react";
import img2 from "../../../Assets/Carousel/car-2.png";
import img1 from "../../../Assets/Carousel/car1.png";
import img3 from "../../../Assets/Carousel/car-3.png";
import img4 from "../../../Assets/Carousel/car-4.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full ">
              <h1 className="font-bold text-2xl mt-20 text-white ">Make The Memories With US</h1>
              <p className="mt-10 text-xl">We Give Our Best Effort To Keep Your Sweet Memories </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="flex h-full items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-full w-full ">
              <h1 className="font-bold text-2xl mt-20 text-white ">Keep The Sweet Memories</h1>
              <p className="mt-10 text-xl">Don't Let Your Memories To Fade Away </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="flex h-full items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-5000 h-full w-full ">
              <h1 className="font-bold text-2xl mt-20 text-white ">Make Us The Partner OF YOUR Happieness</h1>
              <p className="mt-10 text-xl">Share Your Happy Moment With Us </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full">
              <img src={img4} alt="" />
            </div>
          </div>

          <div className="flex h-full items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-full ">
              <h1 className="font-bold text-2xl mt-20 text-white ">Tell The World Your Story</h1>
              <p className="mt-10 text-xl">Let the Camera Speak Who You Are </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full">
              <img src={img3} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

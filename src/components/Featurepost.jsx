import React from "react";
import { Link } from "react-router-dom";

const Featurepost = () => {
  return (
    <div className="flex flex-col  mt-8 lg:flex-row gap-8">
      {/* First post */}
      <div className=" w-full  mt-8 lg:w-1/2 flex flex-col gap-4">
        <img
          src="featured1.jpeg"
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="flex items-center gap-4">
          <h1 className="lg:text-lg font-semibold">.01</h1>
          <Link className="text-blue-500 lg:text-lg ">Web Design</Link>
          <span className="text-gray-500 ">1 days ago</span>
        </div>
        <Link
          to="test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          How to create a website
        </Link>
      </div>
      {/* others post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3  aspect-video"
            alt=""
          />
          <div className="w-2/3">
            <div className=" flex items-center gap-4 text-small lg:text-base mb-4">
              <h1 className="font-semibold">02</h1>
              <Link>Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl lx:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-1/3  aspect-video"
            alt=""
          />
          <div className="w-2/3">
            <div className=" flex items-center gap-4 text-small lg:text-base mb-4">
              <h1 className="font-semibold">03</h1>
              <Link>Web Design</Link>
              <span className="text-gray-500 text-sm">3 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl lx:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-1/3  aspect-video"
            alt=""
          />
          <div className="w-2/3">
            <div className=" flex items-center gap-4 text-small lg:text-base mb-4">
              <h1 className="font-semibold">04</h1>
              <Link>Web Design</Link>
              <span className="text-gray-500 text-sm">4 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl lx:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Featurepost;

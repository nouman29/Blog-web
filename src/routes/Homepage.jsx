import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MainCat from "../components/MainCat";
import Featurepost from "../components/Featurepost";
import Postlist from "../components/Postlist";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4  ">
      {/* BreadCrumb */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800 ">Blog and Article</span>
      </div>
      {/* Intro */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div className="">
          <h1 className=" text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className="mt-9 text-md md:text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, numquam. Beatae cum officiis{" "}
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="relative hidden md:block">
          {/* <svg viewBox="0 0 200 200" width="200" height="200" className=" text-lg trakcing-widest animate-spin animatedButton"> */}
          <svg viewBox="0 0 200 200" width="200" height="200" className=" text-lg trakcing-widest ">

            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75, 75 0 1,1 -150 , 0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">Write Your Story</textPath>
              <textPath href="#circlePath" startOffset="50%">Share your idea</textPath>
            </text>
          </svg>
          <button className=" absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="50"
            width="50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6"></line>
              <polyline points="9 6 18 6 18 15"></polyline>
            </svg>
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCat/>
      {/* Feature */}
      <Featurepost/>
      {/* Post */}
    <div className="">
      <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
      <Postlist/>
    </div>

    </div>
  );
};

export default Homepage;

import React from "react";
import { Link } from "react-router-dom";

const MainCat = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl  xl:round-full p-4 shadow-lg items-center justify-center">
      <div className="flex-1 flex items-center  flex-wrap ">
        <Link
          to="/posts"
          className="bg-blue-500 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web"
          className="hover:bg-blue-50  rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50  rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-blue-50  rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=search"
          className="hover:bg-blue-50  rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50  rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium px-4">|</span>
      <div className=" bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input type="text" placeholder=" Search a post...." className=" bg-transparent outline-none" />
      </div>
    </div>
  );
};

export default MainCat;

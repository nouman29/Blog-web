import React from "react";
import { Link } from "react-router-dom";

const Postlistitem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <img src="postImg.jpeg" alt="" className="rounded-2xl object-cover" />
      </div>
      <div className=" flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          voluptate illo et velit{" "}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written</span>
          <Link className="text-blue-700">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-700">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          assumenda animi asperiores dolore officia cumque cupiditate, eligendi
          magni. Dolore unde placeat alias qui commodi soluta in quis, corporis
          corrupti cupiditate!
        </p>
        <Link to="/test" className="underline text-blue-700 text-sm">Read More</Link>
      </div>
    </div>
  );
};

export default Postlistitem;

import React from "react";
import { Link } from "react-router-dom";
import Postmenuaction from "../components/Postmenuaction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const Singlepostpage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            rem nam nulla iusto numquam aliquam doloremque
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm ">
            <span>Written by</span>
            <Link className="text-blue-700">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-700">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            quibusdam unde voluptas temporibus, rem atque quasi perspiciatis
            animi officia iste provident quidem quas exercitationem harum dolor
            voluptatem adipisci dolore similique?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img src="/postImg.jpeg" alt="" className="rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, accusamus minus rem molestiae tempora temporibus
            dolores porro nihil voluptatibus aliquam voluptate nostrum magni
            atque officiis at ut natus? Harum, aperiam. Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Eligendi temporibus quo facere rerum maiores explicabo iure
              corrupti voluptas, qui quasi in est ut incidunt eveniet voluptatem repellat 
              aut nostrum numquam.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
          <div className="flex items-center gap-8">
            <img src="/userImg.jpeg" alt=""  className="w-12 h-12 rounded-full object-cover"/>
            <Link className="text-blue-800">John Doe</Link>
            </div>
            <div className=" flex flex-col gap-4 ">
            <p className="text-sm  text-gray-500  mt-4">Lorem ipsum dolor sit, amet consectetur dolor sit, amet consectetur </p>
            <div className="flex gap-2 ">
              <Link>
              <img src="/facebook.svg" alt="" />
              </Link>
              <Link>
              <img src="/instagram.svg" alt="" />
              </Link>
            </div>
            </div>
          <Postmenuaction/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories </h1>
          <div className=" flex flex-col gap-2 text-sm">
          <Link className="underline" to="/">All</Link>
          <Link className="underline" to="/">Web design</Link>
          <Link className="underline" to="/">Development</Link>
          <Link className="underline" to="/">Databases</Link>
          <Link className="underline" to="/">Search Engines</Link>
          <Link className="underline" to="/">Marketing</Link>


          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Singlepostpage;

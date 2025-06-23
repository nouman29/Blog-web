import React, { useState } from "react";
import Postlist from "../components/Postlist";
import Sidemenu from "../components/Sidemenu";

const Postlistpage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Deveopment Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white md:hidden rounded-2xl mb-4 px-3 py-2"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <Postlist />
        </div>
        <div className={`${open?"block ":"hidden"} md:block`}>
          <Sidemenu />
        </div>
      </div>
    </div>
  );
};

export default Postlistpage;

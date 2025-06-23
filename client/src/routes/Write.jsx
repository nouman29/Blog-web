import React from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  // if (isLoaded && !isSignedIn) {
  //   return <div className="">You should login</div>;
  // }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-7">
      <h1 className="text-cl font-light">Create a new Post</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-8">
        <button className="w-max p-2 sahdow-md rounded-xl text-sm text-gray-500 bg-white">Add a cover image</button>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">Choose a category:</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="developement">Developement</option>
            <option value="database">Database</option>
            <option value="seo">Search engine </option>
          </select>
        </div>
        <textarea
        className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          id=""
          placeholder="a short description"
        ></textarea>
         <ReactQuill theme="snow"  className="flex-1  rounded-xl bg-white shadow-md"/>
         <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
      </form>
    </div>
  );
};

export default Write;

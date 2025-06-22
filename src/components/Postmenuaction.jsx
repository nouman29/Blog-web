import React from "react";

const Postmenuaction = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2  py-2  text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Save this Post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          fill="red"
          width="20px"
          height="20px"
        >
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
        </svg>
        <span>Delete this Post</span>
      </div>
    </div>
  );
};

export default Postmenuaction;

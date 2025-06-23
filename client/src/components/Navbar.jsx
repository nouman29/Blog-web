import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" w={32} h={32} />
        <h1 className="text-2xl font-bold">Logo</h1>
      </Link>
      {/*Mobile Menu */}

      <div className="md:hidden ">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "X" : "="}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full h-full flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-in-out
         ${isOpen ? " -right-0" : "-right-[100%]"}`}
      >
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <Link to="">
          <button className="bg-blue-800 py-2 px-3 rounded-3xl text-white">
            Login
          </button>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <Link to="/login">
          <button className="bg-blue-800 py-2 px-3 rounded-3xl text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

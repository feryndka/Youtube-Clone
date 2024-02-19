import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";

function NavbarCenter() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#121212] border border-white/10 focus:border-blue-500 placeholder:text-white/25 py-2 px-4 rounded-l-full w-[35vw] outline-none"
      />
      <button className="bg-yt-gray px-5 border border-y-white/10 border-e-white/10 border-s-transparent rounded-r-full">
        <IoSearchOutline size={20} />
      </button>
      <button className="text-white p-3 ml-5 bg-yt-gray rounded-full hover:bg-white/20">
        <FaMicrophone />
      </button>
    </div>
  );
}

export default NavbarCenter;

import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function NavbarCenter() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#121212] border border-white/20 placeholder:text-white/25 py-2 px-4 rounded-l-full w-[35vw] outline-none"
      />
      <button className="bg-yt-gray px-5 border border-y-white/20 border-e-white/20 border-s-transparent rounded-r-full">
        <IoSearchOutline />
      </button>
    </div>
  );
}

export default NavbarCenter;

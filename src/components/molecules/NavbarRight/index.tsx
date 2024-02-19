import Button from "@/components/atoms/Button";
import React from "react";
import { IoMdMore } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="p-2 rounded-full hover:bg-white/20">
        <IoMdMore size={20} />
      </button>
      <Button>
        <HiOutlineUserCircle size={30} />
        Sign In
      </Button>
    </div>
  );
};

export default NavbarRight;

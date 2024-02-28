import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const ButtonSidebar = ({ onClickNavbar }: { onClickNavbar: () => void }) => {
  return (
    <button
      onClick={onClickNavbar}
      className="hover:bg-white/20 z-10 p-2 rounded-full"
    >
      <RxHamburgerMenu size={20} />
    </button>
  );
};

export default ButtonSidebar;

import ButtonSidebar from "@/components/atoms/ButtonSidebar";
import IconYoutube from "@/components/atoms/IconYoutube";
import React from "react";

const NavbarLeft = ({onClickNavbar} : {onClickNavbar: () => void}) => {
  return (
    <div className="flex items-center gap-2">
      <ButtonSidebar onClickNavbar={onClickNavbar} />
      <IconYoutube />
    </div>
  );
};

export default NavbarLeft;

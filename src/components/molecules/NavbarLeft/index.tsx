import ButtonSidebar from "@/components/atoms/ButtonSidebar";
import IconYoutube from "@/components/atoms/IconYoutube";
import React from "react";

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-2">
      <ButtonSidebar />
      <IconYoutube />
    </div>
  );
};

export default NavbarLeft;

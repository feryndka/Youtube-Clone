import Link from "next/link";
import React from "react";

const ButtonItemSidebar = ({
  isActive,
  children,
  href,
}: {
  isActive?: boolean;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "bg-white/20 font-semibold" : "hover:bg-white/20"
      } text-sm flex p-2 ms-3 me-5 gap-6 rounded-lg`}
    >
      {children}
    </Link>
  );
};

export default ButtonItemSidebar;

import React from "react";
import Navbar from "../organism/Navbar";
import ButtonItemSidebar from "../atoms/ButtonItemSidebar";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

interface ISidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href: string;
}

const SIDEBAR_ITEM: ISidebarItem[] = [
  {
    icon: <GoHomeFill size={20} />,
    label: "Beranda",
    isActive: true,
    href: "/",
  },
  {
    icon: <SiYoutubeshorts size={20} />,
    label: "Shorts",
    isActive: false,
    href: "/shorts",
  },
  {
    icon: <MdSubscriptions size={20} />,
    label: "Subscriptions",
    isActive: false,
    href: "/subscriptions",
  },
];

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex mt-2">
        <div className="w-[15vw] h-[91vh] flex flex-col gap-1 overflow-y-scroll">
          {SIDEBAR_ITEM.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/15 my-3"></div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;

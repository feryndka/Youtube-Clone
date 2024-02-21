import React from "react";
import Navbar from "../organism/Navbar";
import ButtonItemSidebar from "../atoms/ButtonItemSidebar";
import {
  SIDEBAR_ITEM_HOME,
  SIDEBAR_ITEM_ACCOUNT,
  SIDEBAR_ITEM_EXPLORE,
  SIDEBAR_ITEM_BROWSE,
  SIDEBAR_ITEM_MORE,
  SIDEBAR_ITEM_SETTING
} from "@/utils/sidebar-item";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Button from "../atoms/Button";
import { GrAddCircle } from "react-icons/gr";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex mt-2">
        <div className="w-[15vw] h-[91vh] flex flex-col gap-1 overflow-y-scroll">
          {/* HOME */}
          {SIDEBAR_ITEM_HOME.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/25 my-3"></div>
          {/* ACCOUNT */}
          {SIDEBAR_ITEM_ACCOUNT.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/25 my-3"></div>
          {/* SIGN IN */}
          <div className="mx-5">
            <div className="mb-3">
              Sign in to like videos, comment, and subscribe.
            </div>
            <Button>
              <HiOutlineUserCircle size={30} />
              Sign In
            </Button>
          </div>
          <div className="h-px bg-white/25 my-3"></div>
          {/* Explore */}
          <h1 className="font-semibold mx-5 text-md text-md mb-1">Explore</h1>
          {SIDEBAR_ITEM_EXPLORE.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/25 my-3"></div>
          {/* BROWSE CHANNELS */}
          {SIDEBAR_ITEM_BROWSE.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/25 my-3"></div>
          {/* MORE */}
          <h1 className="font-semibold mx-5 text-md text-md mb-1">
            More from YouTube
          </h1>
          {SIDEBAR_ITEM_MORE.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
          <div className="h-px bg-white/25 my-3"></div>
          {/* SETTING */}
          {SIDEBAR_ITEM_SETTING.map((item, index) => (
            <ButtonItemSidebar
              href={item.href}
              key={index}
              isActive={item.isActive}
            >
              {item.icon}
              {item.label}
            </ButtonItemSidebar>
          ))}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;

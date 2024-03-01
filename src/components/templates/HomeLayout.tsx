"use client";
import React, { useState } from "react";
import Navbar from "../organism/Navbar";
import ButtonItemSidebar from "../atoms/ButtonItemSidebar";
import {
  SIDEBAR_ITEM_HOME,
  SIDEBAR_ITEM_ACCOUNT,
  SIDEBAR_ITEM_EXPLORE,
  SIDEBAR_ITEM_BROWSE,
  SIDEBAR_ITEM_MORE,
  SIDEBAR_ITEM_SETTING,
} from "@/utils/sidebar-item";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Button from "../atoms/Button";
import SidebarItemLayout from "../atoms/SidebarItemLayout";
import Link from "next/link";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <>
      <Navbar
        onClickNavbar={() => {
          setIsOpenMobileNav(!isOpenMobileNav);
        }}
      />
      <div className="flex mt-2">
        {isOpenMobileNav ? (
          <div className="w-[65px]">
            {SIDEBAR_ITEM_HOME.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="block mb-2 me-1 p-2 rounded hover:bg-white/20"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {item.icon}
                  <p className="text-[9px]">{item.label}</p>
                </div>
              </Link>
            ))}
            {SIDEBAR_ITEM_ACCOUNT.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="block mb-2 me-1 p-2 rounded hover:bg-white/20"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {item.icon}
                  <p className="text-[9px]">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="w-[15vw] h-[90vh] flex flex-col gap-1 overflow-y-scroll">
            {/* HOME */}
            <SidebarItemLayout>
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
            </SidebarItemLayout>
            {/* ACCOUNT */}
            <SidebarItemLayout>
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
            </SidebarItemLayout>
            {/* SIGN IN */}
            <SidebarItemLayout>
              <div className="mx-5">
                <div className="mb-3 text-white/70">
                  Sign in to like videos, comment, and subscribe.
                </div>
                <Button>
                  <HiOutlineUserCircle size={30} />
                  Sign In
                </Button>
              </div>
            </SidebarItemLayout>
            {/* Explore */}
            <SidebarItemLayout>
              <h1 className="font-semibold mx-5 text-md text-md mb-1">
                Explore
              </h1>
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
            </SidebarItemLayout>
            {/* BROWSE CHANNELS */}
            <SidebarItemLayout>
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
            </SidebarItemLayout>
            {/* MORE */}
            <SidebarItemLayout>
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
            </SidebarItemLayout>
            {/* SETTING */}
            <SidebarItemLayout>
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
            </SidebarItemLayout>
            <div className="flex flex-col gap-3 ms-5 me-4 mb-3">
              <div className="text-sm text-white/60 font-semibold">
                About Press Copyright Contact us Creators Advertise Developers
              </div>
              <div className="text-sm text-white/60 font-semibold">
                Terms Privacy Policy & Safety How YouTube works <br /> Test new
                features
              </div>
              <div className="text-sm text-white/40">© 2024 Google LLC</div>
            </div>
          </div>
        )}
        <div className="grow px-3 py-1 w-[85vw]">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;

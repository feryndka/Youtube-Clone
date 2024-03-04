import ButtonFlat from "@/components/atoms/ButtonFlat";
import IconProfile from "@/components/atoms/IconProfile";
import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";

const Video = () => {
  return (
    <div>
      <div className="h-[72vh]">
        <iframe
          width={"100%"}
          height={"100%"}
          src="https://www.youtube.com/embed/9j_0RroIQfk?si=_XMUXkqfmx4sT_tV"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-3xl"
        />
      </div>
      <h1 className="font-bold text-xl my-3">
        MORTAR CANNON TEROR KOTA - GTA 5 ROLEPLAY
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <IconProfile src="/assets/imagesProfile/profile-3.jpg" />
          <div>
            <h3 className="font-bold flex items-center gap-1">
              Jelool <FaCircleCheck size={13} className="text-white/50" />
            </h3>
            <p className="text-sm text-white/50">835 rb subscriber</p>
          </div>
          <div className="flex items-center gap-3 ms-5">
            <button className="border border-white/40 px-4 py-1 rounded-full font-semibold hover:bg-white/30 hover:border-white/5">
              Join
            </button>
            <button className="bg-white px-4 py-1 text-black rounded-full hover:bg-white/80">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex text-sm gap-2">
          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-s-full font-semibold hover:bg-white/30 relative">
              <BiLike size={22} color="white" />
              20K
              <div className="absolute w-px bg-white/30 h-[65%] right-0"></div>
            </button>
            <button className="flex items-center gap-2 bg-white/20 ps-3 pe-5 py-1 rounded-e-full font-semibold hover:bg-white/30">
              <BiDislike size={22} color="white" />
            </button>
          </div>
          <ButtonFlat>
            <PiShareFatLight size={20} />
            Share
          </ButtonFlat>
          <ButtonFlat>
            <TfiDownload size={17} />
            Download
          </ButtonFlat>
          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30">
            <IoIosMore size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;

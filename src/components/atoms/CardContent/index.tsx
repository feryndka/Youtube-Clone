import React from "react";
import IconProfile from "../IconProfile";
import { IoMdMore } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

const CardContent = ({
  title,
  username,
  profile,
  verified,
}: {
  title: string;
  username: string;
  profile: string;
  verified: boolean;
}) => {
  return (
    <div className="flex gap-3 mt-4 justify-between items-start group">
      <div className="flex gap-3">
        <div>
          <IconProfile src={profile} />
        </div>
        <div>
          <p className="font-black mb-1">{title}</p>
          <div className="text-white/60 text-sm ">
            <p className=" flex items-center gap-1">
              <p className="hover:text-white/90">
                {username}
              </p> 
              {verified ? <FaCircleCheck size={13} /> : null}
            </p>
            <p>1,3 jt x ditonton ∙ 45 menit yang lalu </p>
          </div>
        </div>
      </div>
      <button>
        <span className="hidden group-hover:block">
          <IoMdMore size={20} />
        </span>
      </button>
    </div>
  );
};

export default CardContent;

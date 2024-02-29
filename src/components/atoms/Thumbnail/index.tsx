import Image from "next/image";
import React from "react";

const Thumbnail = ({thumbnail, duration} : {thumbnail:string, duration:string}) => {
  return (
    <div className="relative">
      <Image
        src={thumbnail}
        alt="thumbnail-1"
        height={500}
        width={500}
        className="rounded-lg"
      />
      <span className="bg-black absolute bottom-1 right-1 px-1 rounded-md text-sm">
        {duration}
      </span>
    </div>
  );
};

export default Thumbnail;

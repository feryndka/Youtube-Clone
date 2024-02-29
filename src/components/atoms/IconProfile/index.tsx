import Image from "next/image";
import React from "react";

const IconProfile = ({ src }: { src: string }) => {
  return (
    <div className="w-10 h-10">
      <Image
        src={src}
        width={200}
        height={200}
        alt="profile"
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default IconProfile;

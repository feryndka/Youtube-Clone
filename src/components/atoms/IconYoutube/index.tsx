import Image from "next/image";
import Link from "next/link";
import React from "react";

function IconYoutube() {
  return (
    <Link href={"/"}>
      <Image
        src={"/assets/images/youtube.png"}
        alt="youtube"
        width={170}
        height={150}
        className="-ml-3"
      />
    </Link>
  );
}

export default IconYoutube;

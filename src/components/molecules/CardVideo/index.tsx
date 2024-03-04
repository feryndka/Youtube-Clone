import CardContent from "@/components/atoms/CardContent";
import Thumbnail from "@/components/atoms/Thumbnail";
import Link from "next/link";
import React from "react";

const CardVideo = ({
  thumbnail,
  title,
  username,
  profile,
  duration,
  verified,
}: {
  thumbnail: string;
  title: string;
  username: string;
  profile: string;
  duration: string
  verified:boolean
}) => {
  return (
    <Link href={"/1"}>
      <Thumbnail thumbnail={thumbnail} duration={duration} />
      <CardContent title={title} username={username} profile={profile} verified={verified} />
    </Link>
  );
};

export default CardVideo;

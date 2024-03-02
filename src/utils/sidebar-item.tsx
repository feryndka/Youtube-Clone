import { GoTrophy, GoHomeFill, GoHome } from "react-icons/go";
import {
  SiYoutubeshorts,
  SiYoutubegaming,
  SiYoutubemusic,
} from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineOutlinedFlag, MdSubscriptions } from "react-icons/md";
import { GrAddCircle, GrHistory } from "react-icons/gr";
import { BsFire } from "react-icons/bs";
import { PiMusicNoteLight } from "react-icons/pi";
import { BiMovie, BiNews } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { VscReport } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";

interface ISidebarItem {
  icon: React.ReactNode;
  iconIsNotActive?: React.ReactNode;
  label: string;
  isActive?: boolean;
  href: string;
}

export const SIDEBAR_ITEM_HOME: ISidebarItem[] = [
  {
    icon: <GoHomeFill size={20} />,
    iconIsNotActive : <GoHome size={20} />,
    label: "Home",
    isActive: true,
    href: "/",
  },
  {
    icon: <SiYoutubeshorts size={20} />,
    iconIsNotActive : <SiYoutubeshorts size={20} />,
    label: "Shorts",
    isActive: false,
    href: "/shorts",
  },
  {
    icon: <MdSubscriptions size={20} />,
    iconIsNotActive : <MdOutlineSubscriptions size={20} />,
    label: "Subscriptions",
    isActive: false,
    href: "/subscriptions",
  },
];

export const SIDEBAR_ITEM_ACCOUNT: ISidebarItem[] = [
  {
    icon: <MdOutlineVideoLibrary size={20} />,
    label: "You",
    isActive: false,
    href: "/you",
  },
  {
    icon: <GrHistory size={20} />,
    label: "History",
    isActive: false,
    href: "/history",
  },
];

export const SIDEBAR_ITEM_EXPLORE: ISidebarItem[] = [
  {
    icon: <BsFire size={20} />,
    label: "Trending",
    isActive: false,
    href: "#",
  },
  {
    icon: <PiMusicNoteLight size={20} />,
    label: "Music",
    isActive: false,
    href: "#",
  },
  {
    icon: <BiMovie size={20} />,
    label: "Movies",
    isActive: false,
    href: "#",
  },
  {
    icon: <SiYoutubegaming size={20} />,
    label: "Gaming",
    isActive: false,
    href: "#",
  },
  {
    icon: <BiNews size={20} />,
    label: "News",
    isActive: false,
    href: "#",
  },
  {
    icon: <GoTrophy size={20} />,
    label: "Sports",
    isActive: false,
    href: "#",
  },
];

export const SIDEBAR_ITEM_BROWSE: ISidebarItem[] = [
  {
    icon: <GrAddCircle size={20} />,
    label: "Browse channels",
    isActive: false,
    href: "#",
  },
];

export const SIDEBAR_ITEM_MORE: ISidebarItem[] = [
  {
    icon: <FaYoutube size={20} color="red" />,
    label: "Youtube Premium",
    isActive: false,
    href: "#",
  },
  {
    icon: <SiYoutubemusic size={20} color="red" />,
    label: "Youtube Music",
    isActive: false,
    href: "#",
  },
  {
    icon: <TbBrandYoutubeKids size={20} color="red" />,
    label: "Youtube Kids",
    isActive: false,
    href: "#",
  },
];

export const SIDEBAR_ITEM_SETTING: ISidebarItem[] = [
  {
    icon: <IoSettingsOutline size={20} />,
    label: "Settings",
    isActive: false,
    href: "#",
  },
  {
    icon: <MdOutlineOutlinedFlag size={20} />,
    label: "Report history",
    isActive: false,
    href: "#",
  },
  {
    icon: <IoIosHelpCircleOutline size={20} />,
    label: "Help",
    isActive: false,
    href: "#",
  },
  {
    icon: <VscReport size={20} />,
    label: "Send feedback",
    isActive: false,
    href: "#",
  },
];

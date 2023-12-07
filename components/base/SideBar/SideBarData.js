import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
  {
    title: "All Letters",
    path: "/allLetters/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Starred",
    path: "/starred",
    icon: <AiIcons.AiOutlineStar />,
  },
  {
    title: "Drafts",
    path: "/drafts",
    icon: <RiIcons.RiDraftLine />,
  },
  {
    title: "Sent",
    path: "/sent",
    icon: <FaIcons.FaPaperPlane />,
  },
  {
    title: "Receiver",
    path: "/receiver",
    icon: <AiIcons.AiFillProfile />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Friend 1",
        path: "/receiver/friend1",
        icon: <FaIcons.FaUserFriends />,
      },
      {
        title: "Friend 2",
        path: "/receiver/friend2",
        icon: <FaIcons.FaUserFriends />,
      },
      {
        title: "Friend 3",
        path: "/receiver/friend3",
        icon: <FaIcons.FaUserFriends />,
      },
    ],
  },
];

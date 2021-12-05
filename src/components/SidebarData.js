import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as mdIcons from "react-icons/md";
import "../components/MenuOption.css";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: " My Profile",
    path: "/profile",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <mdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: "nav-text",
  },
  {
    title: "FeedBack",
    path: "/feed",
    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: "nav-text",
  },
];

import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as mdIcons from "react-icons/md";
import { IoAlarmOutline } from "react-icons/io5";
import { IoFolder } from "react-icons/io5";
import { IoEarSharp } from "react-icons/io5";
import "../components/MenuOption.css";

export const AdminbarData = [
  {
    title: "VACCINE",
    path: "/vaccine",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "CENTERS",
    path: "/centers",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "USER DETAILS",
    path: "/userdetails",
    icon: <mdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "SCHEDULE",
    path: "/days",
    icon: <IoAlarmOutline />,
    cName: "nav-text",
  },
  {
    title: "REPORT",
    path: "/report",
    icon: <IoFolder />,
    cName: "nav-text",
  },
  {
    title: "FEEDBACK",
    path: "/feedback",
    icon: <IoEarSharp />,
    cName: "nav-text",
  },
];

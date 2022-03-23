import React from "react";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as mdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard Kit",
    path: "",

    cName: "nav-text",
  },
  {
    title: " Tickets",
    path: "/tickets",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Ideas",
    icon: <mdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Contacts",

    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: "nav-text",
  },
  {
    title: "Agent",

    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: "nav-text",
  },
  {
    title: "Articles",
    path: "",
    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: "nav-text",
  },
  {
    title: "Settings",

    icon: <BsIcons.BsFillQuestionSquareFill />,
    cName: "nav-text",
  },
];

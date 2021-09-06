import React from "react";
import * as AiIcons from "react-icons/ai";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import DashboardIcon from "@material-ui/icons/Dashboard";

export const AboutbarData = [
  {
    title: "ABOUT",
    path: "/about",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: " DASHBOARD",
    path: "/dashboard",
    icon: <DashboardIcon />,
    cName: "nav-text",
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <LiveHelpIcon />,
    cName: "nav-text",
  },
];

import React from "react";
/*import Button from "@material-ui/core/Button";*/
/*mport Menu from "@material-ui/core/Menu";*/
/*import MenuItem from "@material-ui/core/MenuItem"; */
/*import MenuIcon from "@material-ui/icons/Menu";*/
import { Link } from "react-router-dom";
/*import * as FaIcons from "react-icons/fa";
/*import * as AiIcons from "react-icons/ai";*/
/*import { IconContext } from "react-icons";*/
import { SidebarData } from "./SidebarData";
import "./MenuOption.css";

export default function SimpleMenu() {
  return (
    <ul>
      <h2>
        <div className="List">
          {SidebarData.map((item, index) => {
            return (
              <div key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </h2>
    </ul>
  );
}

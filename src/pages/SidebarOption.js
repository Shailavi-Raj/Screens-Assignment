import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";

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

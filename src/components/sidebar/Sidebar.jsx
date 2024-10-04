import React, { useState } from "react";
import logo from "./admin-panel.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/data";

const Sidebar = () => {
  const [selected,setSelected]=useState(0);
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="Admin" />
        <span>
          sh<span>o</span>ps
        </span>
      </div>
      {/* Menu */}
      <div className="menu">
       {
        SidebarData.map((item,index)=>{
            return(
                <div className={selected===index ? 'menuItem active' :'menuItem'} key={index}
                onClick={()=>setSelected(index)}
                >
                    <item.icon />
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
        })
       }

       
      </div>
    </div>
  );
};

export default Sidebar;

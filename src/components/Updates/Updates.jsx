import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="profile" className="update-img" />
            <div className="noti">
              <div className="noti-header">
                <span className="noti-name">{update.name}</span>
                <span className="noti-message">{update.noti}</span>
              </div>
              <span className="noti-time">{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;

import React from "react";
import "./styles.css";

const SideNavChatItem = () => {
  return (
    <div className="sidebar__chatListItem">
      <div className="chat_profileImage">
          <img src="logo192.png" width="35" height="35" alt="profile" />
        </div>
        <div className="chat_description">
          <div className="description">
            <h5>Derrick</h5>
            <p>Hi</p>
          </div>
          <div className="chat_timeDelivered">
            <small>4:30am</small>
          </div>
        </div>
    </div>
  );
};

export default SideNavChatItem;

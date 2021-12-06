import React from "react";
import SideNavChatItem from "../SideNavChatItem";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./styles.css";

const SideNav = () => {
  return (
    <div className="sidebar">
      {/* control bar */}
      <div className="sidebar__controlbar">
        <div className="profileImage">
          <img src="logo192.png" width="35" height="35" alt="dp" />
        </div>
        <div className="control_icons">
          <span>
            <MessageIcon />
          </span>
          <span>
            <MoreVertIcon />
          </span>
        </div>
      </div>
      {/* search area */}
      <div className="sidebar__searchbar">
        <input type="text" placeholder="Search or start new chat" />
      </div>
      {/* most recent chats list */}
      <div className="sidebar__chatList">
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
        <SideNavChatItem />
      </div>
    </div>
  );
};

export default SideNav;

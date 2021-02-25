import React from "react";
import ChatMessage from "../ChatMessage";
import ChatFooter from "../ChatFooter";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./styles.css";

const Chat = () => {
  return (
    <div className="main">
      {/* control bar */}
      <div className="main__controlbar d-flex justify-content-between align-items-center">
        <div className="left_control">
          <div className="profileImage">
            <img src="logo192.png" width="35" height="35" alt="profile" />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <h6 style={{ marginBottom: "0px" }}>Derrick</h6>
            <small>Last seen at 4:50pm</small>
          </div>
        </div>
        <div className="control_icons">
          <span>
            <AttachFileIcon />
          </span>
          <span>
            <MoreVertIcon />
          </span>
        </div>
      </div>
      {/* chat message area */}
      <div className="main__chatMessages">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* message input area */}
      <ChatFooter />
    </div>
  );
};

export default Chat;

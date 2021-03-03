import React, { useState } from "react";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MicIcon from "@material-ui/icons/Mic";
import "./styles.css";
import { socket } from "../../config";

const ChatFooter = () => {
  const [chatMessage, setChatMessage] = useState("");

  const handleChange = e => {
    setChatMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (chatMessage) {
      socket.emit("chatMessage", chatMessage);
    }
    setChatMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main__messageBar">
        <SentimentVerySatisfiedIcon />
        <input type="text" value={chatMessage} onChange={handleChange} />
        <MicIcon />
      </div>
    </form>
  );
};

export default ChatFooter;

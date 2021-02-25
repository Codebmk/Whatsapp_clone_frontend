import React from "react";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import MicIcon from "@material-ui/icons/Mic";

import "./styles.css";

const ChatFooter = () => {
  return (
    <div className="main__messageBar">
      <SentimentVerySatisfiedIcon />
      <input type="text" />
      <MicIcon />
    </div>
  );
};

export default ChatFooter;

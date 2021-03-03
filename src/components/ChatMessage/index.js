import React from "react";
import moment from "moment";
import "./styles.css";

const ChatMessage = ({ messageData }) => {
  return (
    <div className="message_item">
      <div className="message_txt">{messageData.txtMessage}</div>
      <small className="message_timeDelivered">
        {moment(messageData.createdAt).format("LT")}
      </small>
    </div>
  );
};

export default ChatMessage;

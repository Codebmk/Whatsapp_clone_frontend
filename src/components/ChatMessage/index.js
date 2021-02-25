import React from "react";
import "./styles.css";

const ChatMessage = () => {
  return (
    <div className="message_item">
      <div className="message_txt">
        This property specifies whether to clip content or to add scrollbars
        when an element's content is too big to fit in a specified area
      </div>
      <small className="message_timeDelivered">4:30am</small>
    </div>
  );
};

export default ChatMessage;

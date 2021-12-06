import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import ChatMessage from "../ChatMessage";
import ChatFooter from "../ChatFooter";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./styles.css";
import { socket } from "../../config";
import { getMessages } from "../../redux/actions/messageActions";
import PropTypes from "prop-types";

const selectChatMessages = state => state.chatMessages;

const Chat = props => {
  const messageEl = useRef(null);
  const [loading, setLoading] = useState(false);
  const chatMessages = props.chats.messages;

  useEffect(() => {
    props.getMessages();
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
    // setLoading(true);
    // fetch("http://localhost:5000/api/messages")
    //   .then(res => res.json())
    //   .then(data => {
    //     setChatMessages(data);
    //     setLoading(false);
    //   })
    //   .catch(err => console.log(err));

    // get newest message
    socket.on("messageValue", messageFromBackend => {
      // let allMessages = [];
      // allMessages = [...chatMessages, messageFromBackend];
      // setChatMessages(allMessages);
    });
  }, []);

  return (
    <div className="main">
      {/* control bar */}
      <div className="main__controlbar">
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
      {/* chat messages */}
      <div className="main__chatMessagesList">
        <div className="main__chatMessages" ref={messageEl}>
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status"></div>
            </div>
          )}
          {chatMessages &&
            chatMessages.map(item => (
              <ChatMessage key={item._id} messageData={item} />
            ))}
        </div>
      </div>
      {/* message input area */}
      <ChatFooter />
    </div>
  );
};

Chat.propTypes = {
  getMessages: PropTypes.func.isRequired,
  chats: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chats: state.chats
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Chat);

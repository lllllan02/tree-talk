import React from "react";
import MessageList from "./MessageList";

const MessageContainer: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        overflow: "hidden",
        background: "#fff",
        margin: "16px",
        borderRadius: "8px",
        border: "1px solid #f0f0f0",
      }}
    >
      <MessageList />
    </div>
  );
};

export default MessageContainer; 
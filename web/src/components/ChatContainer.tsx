import React from "react";
import { Layout } from "antd";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

const { Content } = Layout;

const ChatContainer: React.FC = () => {
  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fafafa",
      }}
    >
      <MessageContainer />
      <MessageInput />
    </Content>
  );
};

export default ChatContainer; 
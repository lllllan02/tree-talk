import React from "react";
import { Layout } from "antd";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";
import BranchTree from "./BranchTree";

const { Content } = Layout;

interface ChatContainerProps {
  showBranchPanel: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ showBranchPanel }) => {
  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fafafa",
      }}
    >
      {showBranchPanel ? (
        <BranchTree />
      ) : (
        <>
          <MessageContainer />
          <MessageInput />
        </>
      )}
    </Content>
  );
};

export default ChatContainer; 
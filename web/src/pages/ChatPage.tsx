import React from "react";
import { Layout } from "antd";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import ChatContainer from "../components/ChatContainer";

const ChatPage: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <AppHeader />

      <Layout>
        <AppSidebar />
        <Layout>
          <ChatContainer />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ChatPage;

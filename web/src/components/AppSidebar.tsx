import React from "react";
import { Layout } from "antd";
import ConversationList from "./ConversationList";

const { Sider } = Layout;

const AppSidebar: React.FC = () => {
  return (
    <Sider
      width={300}
      style={{
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <ConversationList />
    </Sider>
  );
};

export default AppSidebar; 
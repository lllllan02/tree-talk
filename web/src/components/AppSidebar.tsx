import React from "react";
import { Layout } from "antd";
import ConversationTree from "./ConversationTree";

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
      <ConversationTree />
    </Sider>
  );
};

export default AppSidebar; 
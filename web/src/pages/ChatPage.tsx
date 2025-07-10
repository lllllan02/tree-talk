import React, { useState } from "react";
import { Layout } from "antd";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import ChatContainer from "../components/ChatContainer";

const ChatPage: React.FC = () => {
  // 新增：管理右侧面板显示状态
  const [showBranchPanel, setShowBranchPanel] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <AppHeader />

      <Layout>
        {/* 传递切换函数和状态 */}
        <AppSidebar
          showBranchPanel={showBranchPanel}
          setShowBranchPanel={setShowBranchPanel}
        />
        <Layout>
          <ChatContainer showBranchPanel={showBranchPanel} />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ChatPage;

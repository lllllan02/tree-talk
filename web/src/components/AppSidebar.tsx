import React from "react";
import { Layout } from "antd";
import ConversationList from "./ConversationList";

const { Sider } = Layout;

interface AppSidebarProps {
  showBranchPanel: boolean;
  setShowBranchPanel: (show: boolean) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ showBranchPanel, setShowBranchPanel }) => {
  return (
    <Sider
      width={300}
      style={{
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <ConversationList showBranchPanel={showBranchPanel} setShowBranchPanel={setShowBranchPanel} />
    </Sider>
  );
};

export default AppSidebar; 
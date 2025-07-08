import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Logo />
    </Header>
  );
};

export default AppHeader; 
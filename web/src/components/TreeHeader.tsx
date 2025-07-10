import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface TreeHeaderProps {
  title: string;
}

const TreeHeader: React.FC<TreeHeaderProps> = ({ title }) => (
  <div style={{ marginBottom: 16 }}>
    <Title level={5} style={{ margin: 0, marginBottom: 8 }}>
      对话结构图
    </Title>
    <div>
      <span>主题：{title}</span>
    </div>
  </div>
);

export default TreeHeader; 
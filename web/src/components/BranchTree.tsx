import React from 'react';
import { Tree, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Message } from '../types';

const { Title } = Typography;

// 递归将用户消息树转为 Tree 组件数据
function buildUserTree(messages: Message[]): any[] {
  return messages
    .filter(msg => msg.sender === 'user')
    .map(msg => ({
      key: msg.id,
      title: msg.content,
      children: msg.children ? buildUserTree(msg.children) : undefined,
    }));
}

const BranchTree: React.FC = () => {
  const currentConversation = useSelector((state: RootState) => state.conversation.currentConversation);
  if (!currentConversation) {
    return <div style={{ padding: 24, textAlign: 'center', color: '#888' }}>暂无对话</div>;
  }
  const treeData = buildUserTree(currentConversation.messages);
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'auto' }}>
      <Title level={5}>用户提问分支</Title>
      <Tree
        treeData={treeData}
        defaultExpandAll
        showLine
      />
    </div>
  );
};

export default BranchTree; 
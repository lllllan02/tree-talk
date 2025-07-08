import React from 'react';
import { List, Avatar, Typography } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Message } from '../types';
import MessageItem from './MessageItem';

const { Text } = Typography;

// 工具函数：递归拍扁消息树
function flattenMessages(messages: Message[]): Message[] {
  let result: Message[] = [];
  messages.forEach(msg => {
    result.push(msg);
    // @ts-ignore
    if (msg.children && msg.children.length > 0) {
      // @ts-ignore
      result = result.concat(flattenMessages(msg.children));
    }
  });
  return result;
}

const MessageList: React.FC = () => {
  const currentConversation = useSelector((state: RootState) => state.conversation.currentConversation);

  if (!currentConversation) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Text type="secondary">请选择一个对话</Text>
      </div>
    );
  }

  // 拍扁所有消息并按时间排序
  const allMessages = flattenMessages(currentConversation.messages);
  const sortedMessages = allMessages.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <div style={{ padding: '24px', height: '100%', overflowY: 'auto', background: '#f9f9f9', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <List
        dataSource={sortedMessages}
        style={{ width: '100%' }}
        renderItem={msg => (
          <MessageItem message={msg} />
        )}
      />
    </div>
  );
};

export default MessageList; 
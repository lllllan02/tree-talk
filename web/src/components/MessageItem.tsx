import React from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import { Message } from '../types';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <List.Item
      key={message.id}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        border: 'none',
        background: 'transparent',
        padding: '12px 0',
      }}
    >
      {/* 头像 */}
      <Avatar
        icon={isUser ? <UserOutlined /> : <RobotOutlined />}
        style={{
          backgroundColor: isUser ? '#1890ff' : '#52c41a',
          margin: isUser ? '0 0 0 8px' : '0 8px 0 0',
          flexShrink: 0,
        }}
      />
      {/* 用户名/时间 + 气泡 */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isUser ? 'flex-end' : 'flex-start',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <span style={{
            fontSize: 13,
            color: '#888',
            textAlign: isUser ? 'right' : 'left',
          }}>
            {isUser ? '用户' : 'AI助手'} · {new Date(message.createdAt).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div
          style={{
            maxWidth: '100%',
            background: isUser ? '#f6ffed' : '#e6f7ff',
            color: '#222',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            wordBreak: 'break-word',
            fontSize: 16,
            textAlign: 'left',
            marginTop: 0,
          }}
        >
          {message.content}
        </div>
      </div>
    </List.Item>
  );
};

export default MessageItem; 
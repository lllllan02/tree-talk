import React from 'react';
import { List, Avatar, Typography } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Message } from '../types';

const { Text } = Typography;

const MessageList: React.FC = () => {
  const currentBranch = useSelector((state: RootState) => state.conversation.currentBranch);

  if (!currentBranch) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Text type="secondary">请选择一个对话分支</Text>
      </div>
    );
  }

  // 按时间顺序排序
  const sortedMessages = [...currentBranch.messages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <div style={{ padding: '24px', height: '100%', overflowY: 'auto', background: '#f9f9f9', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <List
        dataSource={sortedMessages}
        style={{ width: '100%' }}
        renderItem={msg => {
          const isUser = msg.sender === 'user';
          return (
            <List.Item
              key={msg.id}
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
                    {isUser ? '用户' : 'AI助手'} · {new Date(msg.createdAt).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
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
                  {msg.content}
                </div>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default MessageList; 
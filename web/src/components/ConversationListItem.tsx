import React from 'react';
import { List, Space, Typography } from 'antd';
import { MessageOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Conversation } from '../types';

const { Text } = Typography;

interface ConversationListItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: (conversation: Conversation) => void;
}

const ConversationListItem: React.FC<ConversationListItemProps> = ({ conversation, isActive, onClick }) => {
  return (
    <List.Item
      style={{
        padding: '8px 12px',
        cursor: 'pointer',
        borderRadius: '6px',
        backgroundColor: isActive ? '#f0f0f0' : 'transparent',
        marginBottom: '4px',
      }}
      onClick={() => onClick(conversation)}
    >
      <div style={{ width: '100%' }}>
        <Space>
          <MessageOutlined style={{ color: '#1890ff' }} />
          <Text 
            style={{ 
              fontSize: '14px',
              color: isActive ? '#1890ff' : '#333',
              fontWeight: isActive ? 'bold' : 'normal'
            }}
          >
            {conversation.title}
          </Text>
        </Space>
        <div style={{ marginTop: '4px' }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            <ClockCircleOutlined style={{ marginRight: '4px' }} />
            {conversation.messages.length} 条消息
          </Text>
        </div>
      </div>
    </List.Item>
  );
};

export default ConversationListItem; 
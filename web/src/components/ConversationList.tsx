import React from 'react';
import { List, Button, Space, Typography, Divider } from 'antd';
import { PlusOutlined, MessageOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCurrentConversation } from '../store/conversationSlice';
import { Conversation } from '../types';
import { mockConversations } from '../utils/mockData';
import ConversationListItem from './ConversationListItem';

const { Title, Text } = Typography;

const ConversationList: React.FC = () => {
  const dispatch = useDispatch();
  const currentConversation = useSelector((state: RootState) => state.conversation.currentConversation);

  const handleConversationClick = (conversation: Conversation) => {
    dispatch(setCurrentConversation(conversation));
  };

  const handleNewBranch = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 创建新对话的逻辑
    console.log('创建新对话');
  };

  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
      <div style={{ marginBottom: '16px' }}>
        <Title level={4} style={{ margin: 0 }}>对话</Title>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          size="small"
          onClick={handleNewBranch}
          style={{ marginTop: '8px' }}
        >
          新建对话
        </Button>
      </div>
      
      <Divider style={{ margin: '12px 0' }} />
      
      <List
        dataSource={mockConversations}
        renderItem={(conversation: Conversation) => (
          <ConversationListItem
            conversation={conversation}
            isActive={currentConversation?.id === conversation.id}
            onClick={handleConversationClick}
          />
        )}
      />
    </div>
  );
};

export default ConversationList; 
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

interface ConversationListProps {
  showBranchPanel: boolean;
  setShowBranchPanel: (show: boolean) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ showBranchPanel, setShowBranchPanel }) => {
  const dispatch = useDispatch();
  const currentConversation = useSelector((state: RootState) => state.conversation.currentConversation);

  // 点击对话项
  const handleConversationClick = (conversation: Conversation) => {
    if (currentConversation?.id === conversation.id) {
      // 点击当前高亮对话，切换分支面板显示
      setShowBranchPanel(!showBranchPanel);
    } else {
      dispatch(setCurrentConversation(conversation));
      setShowBranchPanel(false); // 切换对话时回到聊天面板
    }
  };

  const handleNewChat = (e: React.MouseEvent) => {
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
          onClick={handleNewChat}
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
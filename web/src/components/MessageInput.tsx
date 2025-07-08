import React, { useState } from 'react';
import { Input, Button, Space, Card } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const { TextArea } = Input;

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const currentBranch = useSelector((state: RootState) => state.conversation.currentBranch);

  const handleSend = async () => {
    if (!message.trim() || !currentBranch) return;

    setLoading(true);
    
    // 模拟发送消息
    setTimeout(() => {
      console.log('发送消息:', message);
      console.log('当前分支:', currentBranch.name);
      setMessage('');
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!currentBranch) {
    return (
      <Card style={{ margin: '16px' }}>
        <div style={{ textAlign: 'center', color: '#999' }}>
          请先选择一个对话分支
        </div>
      </Card>
    );
  }

  return (
    <Card style={{ margin: '16px' }}>
      <Space.Compact style={{ width: '100%' }}>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="输入您的消息..."
          autoSize={{ minRows: 2, maxRows: 6 }}
          style={{ flex: 1 }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSend}
          loading={loading}
          disabled={!message.trim()}
          style={{ height: 'auto' }}
        >
          发送
        </Button>
      </Space.Compact>
    </Card>
  );
};

export default MessageInput; 
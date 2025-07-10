import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Message } from '../types';
import TreeHeader from './TreeHeader';
import GenealogyNode from './GenealogyNode';
import CanvasWrapper from './CanvasWrapper';

// 递归配对：每个节点为“用户+AI”一组，children为该组下的所有分支（每个分支也是一组）
function pairMessages(messages: Message[]): any[] {
  const pairs: any[] = [];
  for (const msg of messages) {
    if (msg.sender === 'user') {
      // 找到user的第一个ai子回复
      const aiReply = (msg.children || []).find(child => child.sender === 'ai');
      pairs.push({
        user: msg,
        ai: aiReply || null,
        children: aiReply
          ? pairMessages(aiReply.children || [])
          : pairMessages((msg.children || []).filter(child => child !== aiReply)),
      });
    }
  }
  return pairs;
}

const styles = {
  genealogyRoot: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    width: '100%',
  },
};

const BranchTree: React.FC = () => {
  const currentConversation = useSelector((state: RootState) => state.conversation.currentConversation);

  if (!currentConversation) {
    return (
      <div style={{ 
        padding: 24, 
        textAlign: 'center', 
        color: '#888',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        暂无对话
      </div>
    );
  }

  const pairedData = pairMessages(currentConversation.messages);

  return (
    <div style={{ width: '100%', padding: 24, boxSizing: 'border-box' }}>
      <TreeHeader title={currentConversation.title} />
      <CanvasWrapper>
        <div style={styles.genealogyRoot}>
          {pairedData.map((node, idx) => (
            <GenealogyNode node={node} key={idx} />
          ))}
        </div>
      </CanvasWrapper>
    </div>
  );
};

export default BranchTree; 
import React from 'react';
import { Tree, Button, Space, Typography } from 'antd';
import { PlusOutlined, MessageOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCurrentBranch } from '../store/conversationSlice';
import { Branch } from '../types';
import { mockBranches } from '../utils/mockData';

const { Title } = Typography;

const ConversationTree: React.FC = () => {
  const dispatch = useDispatch();
  const currentBranch = useSelector((state: RootState) => state.conversation.currentBranch);

  // 将分支数据转换为Tree组件需要的格式
  const convertBranchesToTreeData = (branches: Branch[]): any[] => {
    return branches.map(branch => ({
      key: branch.id,
      title: (
        <Space>
          <MessageOutlined />
          <span>{branch.name}</span>
          <Button 
            type="text" 
            size="small" 
            icon={<PlusOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              // 创建新分支的逻辑
            }}
          />
        </Space>
      ),
      children: branch.children ? convertBranchesToTreeData(branch.children) : undefined,
    }));
  };

  const treeData = convertBranchesToTreeData(mockBranches);

  const handleSelect = (selectedKeys: React.Key[]) => {
    if (selectedKeys.length > 0) {
      const branchId = selectedKeys[0] as string;
      const branch = findBranchById(mockBranches, branchId);
      if (branch) {
        dispatch(setCurrentBranch(branch));
      }
    }
  };

  // 递归查找分支
  const findBranchById = (branches: Branch[], id: string): Branch | null => {
    for (const branch of branches) {
      if (branch.id === id) {
        return branch;
      }
      if (branch.children) {
        const found = findBranchById(branch.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
      <Title level={4}>对话分支</Title>
      <Tree
        treeData={treeData}
        onSelect={handleSelect}
        selectedKeys={currentBranch ? [currentBranch.id] : []}
        defaultExpandAll
        showLine
        showIcon
      />
    </div>
  );
};

export default ConversationTree; 
import { Conversation, Message, Branch } from '../types';

// 模拟消息数据
export const mockMessages: Message[] = [
  {
    id: '1',
    content: '你好，我想了解一下人工智能的发展历史',
    sender: 'user',
    createdAt: '2024-01-01T10:00:00Z',
  },
  {
    id: '2',
    content: '人工智能的发展可以追溯到1950年代。图灵测试的提出标志着AI研究的开始。',
    sender: 'ai',
    parentId: '1',
    createdAt: '2024-01-01T10:01:00Z',
  },
  {
    id: '3',
    content: '那图灵测试具体是什么？',
    sender: 'user',
    parentId: '2',
    createdAt: '2024-01-01T10:02:00Z',
  },
  {
    id: '4',
    content: '图灵测试是由艾伦·图灵在1950年提出的，用来判断机器是否具有智能的测试。',
    sender: 'ai',
    parentId: '3',
    createdAt: '2024-01-01T10:03:00Z',
  },
  {
    id: '5',
    content: '我想了解一下机器学习',
    sender: 'user',
    parentId: '2',
    createdAt: '2024-01-01T10:04:00Z',
  },
  {
    id: '6',
    content: '机器学习是人工智能的一个重要分支，它让计算机能够从数据中学习并改进。',
    sender: 'ai',
    parentId: '5',
    createdAt: '2024-01-01T10:05:00Z',
  },
  {
    id: '7',
    content: '深度学习又是什么？',
    sender: 'user',
    parentId: '6',
    createdAt: '2024-01-01T10:06:00Z',
  },
  {
    id: '8',
    content: '深度学习是机器学习的一个子集，使用多层神经网络来模拟人脑的学习过程。',
    sender: 'ai',
    parentId: '7',
    createdAt: '2024-01-01T10:07:00Z',
  },
];

// 构建树形结构
export const buildMessageTree = (messages: Message[]): Message[] => {
  const messageMap = new Map<string, Message>();
  const rootMessages: Message[] = [];

  // 创建消息映射
  messages.forEach(msg => {
    messageMap.set(msg.id, { ...msg, children: [] });
  });

  // 构建树形结构
  messages.forEach(msg => {
    const messageWithChildren = messageMap.get(msg.id)!;
    if (msg.parentId) {
      const parent = messageMap.get(msg.parentId);
      if (parent) {
        parent.children!.push(messageWithChildren);
      }
    } else {
      rootMessages.push(messageWithChildren);
    }
  });

  return rootMessages;
};

// 模拟对话数据
export const mockConversations: Conversation[] = [
  {
    id: 'conv1',
    title: '人工智能发展历史',
    messages: buildMessageTree(mockMessages),
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:07:00Z',
  },
  {
    id: 'conv2',
    title: '编程语言讨论',
    messages: buildMessageTree([
      {
        id: '9',
        content: '你觉得Python和JavaScript哪个更适合初学者？',
        sender: 'user',
        createdAt: '2024-01-02T14:00:00Z',
      },
      {
        id: '10',
        content: '对于初学者来说，Python可能更友好一些，因为语法更简洁。',
        sender: 'ai',
        parentId: '9',
        createdAt: '2024-01-02T14:01:00Z',
      },
    ]),
    createdAt: '2024-01-02T14:00:00Z',
    updatedAt: '2024-01-02T14:01:00Z',
  },
];

// 模拟分支数据
export const mockBranches: Branch[] = [
  {
    id: 'branch1',
    name: '图灵测试',
    parentId: undefined,
    messages: mockMessages.filter(msg => ['1', '2', '3', '4'].includes(msg.id)),
    children: [],
  },
  {
    id: 'branch2',
    name: '机器学习',
    parentId: undefined,
    messages: mockMessages.filter(msg => ['1', '2', '5', '6'].includes(msg.id)),
    children: [
      {
        id: 'branch2-1',
        name: '深度学习',
        parentId: 'branch2',
        messages: mockMessages.filter(msg => ['1', '2', '5', '6', '7', '8'].includes(msg.id)),
        children: [],
      },
    ],
  },
]; 
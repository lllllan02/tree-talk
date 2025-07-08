// 消息类型
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  parentId?: string;
  createdAt: string;
  children?: Message[];
} 
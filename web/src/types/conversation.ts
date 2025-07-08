import { Message } from './message';

// 对话类型
export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

// 分支类型
export interface Branch {
  id: string;
  name: string;
  parentId?: string;
  messages: Message[];
  children?: Branch[];
} 
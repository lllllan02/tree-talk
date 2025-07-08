import { Conversation } from './conversation';
import { Branch } from './conversation';

// 应用状态类型
export interface AppState {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  currentBranch: Branch | null;
  loading: boolean;
} 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Conversation, Branch } from '../types';
import { mockConversations, mockBranches } from '../utils/mockData';

const initialState: AppState = {
  conversations: mockConversations,
  currentConversation: mockConversations[0],
  currentBranch: mockBranches[0],
  loading: false,
};

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setCurrentConversation: (state, action: PayloadAction<Conversation>) => {
      state.currentConversation = action.payload;
    },
    setCurrentBranch: (state, action: PayloadAction<Branch>) => {
      state.currentBranch = action.payload;
    },
    addMessage: (state, action: PayloadAction<{ conversationId: string; message: any }>) => {
      // 这里暂时不实现，等后端API准备好后再完善
    },
    createNewBranch: (state, action: PayloadAction<{ parentMessageId: string; branchName: string }>) => {
      // 这里暂时不实现，等后端API准备好后再完善
    },
  },
});

export const { setCurrentConversation, setCurrentBranch, addMessage, createNewBranch } = conversationSlice.actions;
export default conversationSlice.reducer; 
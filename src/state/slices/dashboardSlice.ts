import { createSlice } from '@reduxjs/toolkit';
import {
  AddMessageAction,
  SetConversationsAction,
  SetConvesationHistoryAction,
  SetSelectedConversationIdAction,
} from '../actions';
import { Conversation } from '@backend/types';

interface State {
  sessionEstablished: boolean;
  conversations: Conversation[];
  selectedConversationId: string | null;
}

const initialState: State = {
  sessionEstablished: false,
  conversations: [],
  selectedConversationId: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedConversationId: (
      state,
      action: SetSelectedConversationIdAction
    ) => {
      state.selectedConversationId = action.payload;
    },
    addMessage: (state, action: AddMessageAction) => {
      const { conversationId, message } = action.payload;

      // check if the selected conversation exists
      const conversation = state.conversations.find(
        (c) => c.id === conversationId
      );

      // if the conversation doesn't exist,
      // create the new message obj to the conv array
      if (!conversation) {
        state.conversations.push({
          id: conversationId,
          messages: [message],
        });
      }

      // if the conversation already exist, push the message obj to the conv array
      conversation?.messages.push(message);
    },
    setConversations: (state, action: SetConversationsAction) => {
      state.conversations = action.payload;
      state.sessionEstablished = true; // loading
    },
    setConversationHistory: (state, action: SetConvesationHistoryAction) => {
      const { id, messages } = action.payload;

      // find the conversation
      const conversation = state.conversations.find((c) => c.id === id);

      if (!conversation) {
        // add a new conversation to the conversations array
        state.conversations.push({ id, messages });
      } else {
        // update messages array
        conversation.messages = messages;
      }
    },
  },
});

export const {
  setSelectedConversationId,
  addMessage,
  setConversations,
  setConversationHistory,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

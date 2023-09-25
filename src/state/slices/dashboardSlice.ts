import { createSlice } from '@reduxjs/toolkit';
import { AddMessageAction, SetSelectedConversationIdAction } from '../actions';
import { Message } from '../../interfaces';

interface State {
  sessionEstablished: boolean;
  conversations: {
    id: string;
    messages: Message[];
  }[];
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
  },
});

export const { setSelectedConversationId, addMessage } = dashboardSlice.actions;

export default dashboardSlice.reducer;

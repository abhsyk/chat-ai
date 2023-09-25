import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionEstablished: false,
  conversation: [],
  selectedConversationId: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedConversationId: (state, action) => {
      state.selectedConversationId = action.payload;
    },
  },
});

export const { setSelectedConversationId } = dashboardSlice.actions;

export default dashboardSlice.reducer;

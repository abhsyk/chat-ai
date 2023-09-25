import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionEstablished: false,
  conversation: [],
  selectedConversationId: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;

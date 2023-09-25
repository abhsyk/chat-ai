import { configureStore } from '@reduxjs/toolkit';
import { dashboardReducer } from './slices';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export const store: ToolkitStore = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

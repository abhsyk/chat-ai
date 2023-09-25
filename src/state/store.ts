import { configureStore } from '@reduxjs/toolkit';
import { dashboardReducer } from './reducers';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export const store: ToolkitStore = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

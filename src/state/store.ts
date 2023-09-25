import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import reducers from './slices';

export const store: ToolkitStore = configureStore({
  reducer: reducers,
});

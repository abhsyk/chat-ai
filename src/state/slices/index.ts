import { combineReducers } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  dashboards: dashboardReducer,
});

export default reducers;

export * from './dashboardSlice';

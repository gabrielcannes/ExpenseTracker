import { configureStore } from '@reduxjs/toolkit';
import totalBalanceSlice from './reducers/TotalBalanceSlice';

export const store = configureStore({
  reducer: {
    totalBalance: totalBalanceSlice
  },
});

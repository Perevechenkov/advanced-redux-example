import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';

export default configureStore({
  reducer: {
    ui: uiReducer,
  },
});

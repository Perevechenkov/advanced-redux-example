import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';

export default configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

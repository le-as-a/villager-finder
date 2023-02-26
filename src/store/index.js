import { configureStore } from '@reduxjs/toolkit';
import { catalogSlice } from './catalogSlice';
import { namesSlice } from './NamesSlice';
import { villagerSlice } from './villagerSlice';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    names: namesSlice.reducer,
    villager: villagerSlice.reducer,
    catalog: catalogSlice.reducer,
    user: userSlice.reducer,
  },
});
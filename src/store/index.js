import { configureStore } from '@reduxjs/toolkit';
import { catalogSlice } from './catalogSlice';
import { namesSlice } from './NamesSlice';
import { villagerSlice } from './villagerSlice';

export const store = configureStore({
  reducer: {
    names: namesSlice.reducer,
    villager: villagerSlice.reducer,
    catalog: catalogSlice.reducer,
  },
});
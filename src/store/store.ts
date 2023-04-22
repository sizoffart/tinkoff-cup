import {
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer as Reducer<RootState>
});

export default store;

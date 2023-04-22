import { combineReducers } from 'redux';

import mainReducer from './mainSlice';

// Import your reducers here

const rootReducer = combineReducers({
  // Define your reducers here
  main: mainReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
// Import your reducers here
import todosReducer from './todosSlice';

const rootReducer = combineReducers({
  // Define your reducers here
  todos: todosReducer,
  counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
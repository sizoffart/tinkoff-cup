import { RootState } from './rootReducer';

export const selectCounterValue = (state: RootState) => state.counter.value;
export const getTodos = (state: RootState) => state.todos;
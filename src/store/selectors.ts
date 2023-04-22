import { RootState } from './rootReducer';

export const getExpensesHistory = (state: RootState) => state.main.expensesRecords;
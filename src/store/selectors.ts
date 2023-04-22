import { RootState } from './rootReducer';

export const getExpensesHistory = (state: RootState) => state.main.expensesRecords;
export const getEditingExpensesRecord = (state: RootState) => state.main.editingExpensesRecord;
export const isNewExpensesRecordEditing = (state: RootState) => state.main.editingExpensesRecord !== null;
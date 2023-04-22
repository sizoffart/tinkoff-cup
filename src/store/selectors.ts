import { ExpensesCategory } from '../types';
import { RootState } from './rootReducer';

export const getExpensesHistory = (state: RootState) => state.main.expensesRecords;
export const getEditingExpensesRecord = (state: RootState) => state.main.editingExpensesRecord;
export const isNewExpensesRecordEditing = (state: RootState) => state.main.editingExpensesRecord !== null;
export const getFilterCategoryIds = (state: RootState) => state.main.filters.categoryIds;
export const getExpensesHistoryFiltered = (state: RootState) => {
    const expensesHistory = getExpensesHistory(state);
    const filterCategoryIds = getFilterCategoryIds(state);
    return expensesHistory.filter(
        ({ categoryId }) => filterCategoryIds?.length > 0
            ? filterCategoryIds.includes(String(categoryId) as unknown as ExpensesCategory)
            : true
    );
}
import { ExpensesCategory } from './types.d';

export const CATEGORY_NAMES = {
    [ExpensesCategory.HEALTH]: 'Health',
    [ExpensesCategory.RESTAURANT]: 'Restaurant',
    [ExpensesCategory.SUPERMARKET]: 'Supermarket',
    [ExpensesCategory.TAXI]: 'Taxi',
    [ExpensesCategory.OTHER]: 'Other',
}

export const NEW_EXPENSES_RECORD_ID = -99999;

export const NEW_EXPENSES_RECORD = {
    id: NEW_EXPENSES_RECORD_ID,
    categoryId: ExpensesCategory.OTHER,
    date: '',
    amount: 0,
}
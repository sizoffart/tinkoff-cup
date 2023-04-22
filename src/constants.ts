import { ExpensesCategory } from './types.d';

export const CATEGORY_NAMES = {
    [ExpensesCategory.HEALTH]: 'Health',
    [ExpensesCategory.RESTAURANT]: 'Restaurant',
    [ExpensesCategory.SUPERMARKET]: 'Supermarket',
    [ExpensesCategory.TAXI]: 'Taxi',
    [ExpensesCategory.OTHER]: 'Other',
}

export const CATEGORY_COLORS = {
    [ExpensesCategory.HEALTH]: '#4fc3f7',
    [ExpensesCategory.RESTAURANT]: '#aed581',
    [ExpensesCategory.SUPERMARKET]: '#ffb74d',
    [ExpensesCategory.TAXI]: '#ba68c8',
    [ExpensesCategory.OTHER]: '#fff176',
}

export const NEW_EXPENSES_RECORD_ID = -99999;

export const NEW_EXPENSES_RECORD = {
    id: NEW_EXPENSES_RECORD_ID,
    categoryId: ExpensesCategory.OTHER,
    date: '',
    amount: 0,
}
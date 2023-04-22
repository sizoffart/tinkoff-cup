export enum ExpensesCategory {
    SUPERMARKET = 1,
    RESTAURANT = 2,
    TAXI = 3,
    HEALTH = 4,
    OTHER = 5,
}

export interface IExpensesRecord {
    id: number;
    categoryId: ExpensesCategory;
    date: string | null;
    amount: number | null;
}

export interface IFilters {
    categoryIds: Array<ExpensesCategory>;
    dateFrom: string | null;
    dateTo: string | null;
}

export interface IMainState {
    expensesRecords: Array<IExpensesRecord>;
    editingExpensesRecord: IExpensesRecord | null;
    filters: IFilters;
}

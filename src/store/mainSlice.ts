import moment from 'moment';

import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  INITIAL_FILTERS,
  NEW_EXPENSES_RECORD,
} from '../constants';
import type {
  IExpensesRecord,
  IFilters,
  IMainState,
} from '../types.d';

const initialState: IMainState = {
  expensesRecords: Array(5).fill(null).map((el, i) => ({
    id: i + 1,
    categoryId: i + 1,
    date: moment().add(i, 'days').toISOString(),
    amount: 100 * (i + 1),
  })),
  editingExpensesRecord: null,
  filters: { ...INITIAL_FILTERS },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNewExpensesRecord: (state) => {
      state.editingExpensesRecord = { ...NEW_EXPENSES_RECORD  };
    },
    cancelNewRecordEditing: (state) => {
      state.editingExpensesRecord = null;
    },
    updateEditingExpensesRecord: (state, action: PayloadAction<Partial<IExpensesRecord>>) => {
      state.editingExpensesRecord = { ...state.editingExpensesRecord, ...action.payload } as IExpensesRecord;
    },
    completeNewRecordEditing: (state) => {
      const maxId = Math.max(...state.expensesRecords.map(({ id }) => id));
      state.expensesRecords.push({ ...state.editingExpensesRecord, id: maxId + 1 } as IExpensesRecord);
      state.editingExpensesRecord = null;
    },
    updateFilters: (state, action: PayloadAction<Partial<IFilters>>) => {
      state.filters = { ...state.filters,  ...action.payload };
    },
  },
});

export const {
  addNewExpensesRecord,
  cancelNewRecordEditing,
  updateEditingExpensesRecord,
  completeNewRecordEditing,
  updateFilters,
} = mainSlice.actions;


export default mainSlice.reducer;

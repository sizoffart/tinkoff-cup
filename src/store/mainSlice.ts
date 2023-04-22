import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { NEW_EXPENSES_RECORD } from '../constants';
import type {
  IExpensesRecord,
  IMainState,
} from '../types.d';

const initialState: IMainState = {
  expensesRecords: [{
    id: 1,
    categoryId: 1,
    date: new Date().toISOString(),
    amount: 100,
  }, {
    id: 2,
    categoryId: 2,
    date: new Date().toISOString(),
    amount: 200,
  }, {
    id: 3,
    categoryId: 3,
    date: new Date().toISOString(),
    amount: 300,
  }, {
    id: 4,
    categoryId: 4,
    date: new Date().toISOString(),
    amount: 400,
  }, {
    id: 5,
    categoryId: 5,
    date: new Date().toISOString(),
    amount: 500,
  }],
  editingExpensesRecord: null,
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
    }
  },
});

export const {
  addNewExpensesRecord,
  cancelNewRecordEditing,
  updateEditingExpensesRecord,
  completeNewRecordEditing,
} = mainSlice.actions;


export default mainSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { NEW_EXPENSES_RECORD } from '../constants';
import type { IMainState } from '../types.d';

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
    }
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addNewExpensesRecord } = mainSlice.actions;


export default mainSlice.reducer;

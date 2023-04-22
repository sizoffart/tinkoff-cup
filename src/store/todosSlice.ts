import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  loading: boolean;
  error: string | null;
  data: Todo[];
}

const initialState: TodosState = {
  loading: false,
  error: null,
  data: [],
};

// Define your async thunk action
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Define additional synchronous action creators here if needed
  },
  extraReducers: (builder: any) => {
    // Handle the result of your async thunk action here
    builder
      .addCase(fetchTodos.pending, (state: TodosState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state: TodosState, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state: TodosState, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todosSlice.reducer;

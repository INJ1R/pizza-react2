import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Pizza = {
  id: string;
  title: string;
  price: number;
  sizes: number[];
  types: number[];
  imgUrl: string;
};

enum Status {
  LOADING = 'Loading',
  SUCCESS = 'Success',
  ERROR = 'Error',
}

interface PizzaState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaState = {
  items: [],
  status: Status.LOADING,
};

type fetchPizzas = {
  sortBy: string;
  categoryId: number;
  search: string;
  sortType: {
    sort;
  };
};

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async function (params: fetchPizzas, thunkApi) {
    const { sortBy, categoryId, search, sortType } = params;
    const response = await axios.get<Pizza[]>(
      `https://657998921acd268f9af9769e.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&${search}&sortBy=${sortBy}&order=${sortType.sort.includes('-') ? 'asc' : 'desc'}`,
    );
    return response.data as Pizza[];
  },
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

type Sort = {
  name: string;
  sort: string;
};

interface FilterState {
  search: string;
  categoryId: number;
  sort: Sort;
}

const initialState: FilterState = {
  search: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sort: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setcategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setcategoryId, setSort, setFilters, setSearch } = filterSlice.actions;

export default filterSlice.reducer;

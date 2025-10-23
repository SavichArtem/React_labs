import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    specialization: '',
    sortBy: 'name'
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSpecialization: (state, action) => {
      state.specialization = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    clearFilters: (state) => {
      state.search = '';
      state.specialization = '';
      state.sortBy = 'name';
    }
  }
});

export const { setSearch, setSpecialization, setSortBy, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
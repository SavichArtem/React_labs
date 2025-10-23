import { createSlice } from '@reduxjs/toolkit';

const freelancersSlice = createSlice({
  name: 'freelancers',
  initialState: {
    list: [],
    selected: [],
  },
  reducers: {
    setFreelancers: (state, action) => {
      state.list = action.payload;
    },
    addFreelancer: (state, action) => {
      state.list.push(action.payload);
    },
    updateFreelancer: (state, action) => {
      const index = state.list.findIndex(f => f.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteFreelancers: (state, action) => {
      state.list = state.list.filter(f => !action.payload.includes(f.id));
    },
    toggleSelect: (state, action) => {
      const id = action.payload;
      if (state.selected.includes(id)) {
        state.selected = state.selected.filter(item => item !== id);
      } else {
        state.selected.push(id);
      }
    },
    clearSelected: (state) => {
      state.selected = [];
    }
  },
});

export const { 
  setFreelancers, 
  addFreelancer, 
  updateFreelancer, 
  deleteFreelancers, 
  toggleSelect, 
  clearSelected 
} = freelancersSlice.actions;

export default freelancersSlice.reducer;
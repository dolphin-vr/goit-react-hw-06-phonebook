import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: 'filter',
   initialState: '',
   reducers: {
      handleFilter(state, action){
         return action.payload
      },
   }
});

export const {handleFilter} = slice.actions;
export const filterReducer = slice.reducer;
export const getFilter = state=>state.filter;
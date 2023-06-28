import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataCategory: [],
};

export const CategoryReducer = createSlice({
  name: "CategoryReducer",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.dataCategory = action.payload;
    },
  },
});

export const fetchCategory = () => {
  return async (dispatch) => {
    const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";
    try {
      const res = await axios.get(`${baseUrl}api/blog/allCategory`);
      const data = res.data;
      dispatch(addCategory(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const { addCategory } = CategoryReducer.actions;
export default CategoryReducer.reducer;

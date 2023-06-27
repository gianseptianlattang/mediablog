import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestBlog: {
    id_cat: 0,
    sort: "DESC",
    page: 0,
    search: 0,
    sortBy: "createdAt",
    size: 0,
  },
  pageBlog: {
    page: 0,
    rows: 0,
    blogPage: 0,
    listLimit: 0,
    result: [],
  },
};

export const BlogReducer = createSlice({
  name: "BlogReducer",
  initialState,
  reducers: {
    addDataBlog: (state, action) => {
      state.pageBlog = action.payload;
    },
  },
});

export const { profileEdit } = BlogReducer.actions;
export default BlogReducer.reducer;

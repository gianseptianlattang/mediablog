import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestBlogAllCategory: {
    sort: "DESC",
    page: 1,
    sortBy: "createdAt",
    size: 12,
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
      const { page, rows, blogPage, listLimit, result } = action.payload;
      state.pageBlog = {
        page,
        rows,
        blogPage,
        listLimit,
        result,
      };
    },
    changePage: (state, action) => {
      state.requestBlogAllCategory.page = action.payload;
    },
  },
});

export const { addDataBlog, changePage } = BlogReducer.actions;
export default BlogReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

const initialState = {
  requestBlogAllCategory: {
    sort: "DESC",
    page: 1,
    sortBy: "createdAt",
    size: 12,
  },
  requestBlogByCategory: {
    id_cat: 0,
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
    changeCategory: (state, action) => {
      state.requestBlogByCategory.id_cat = action.payload;
    },
  },
});

export const fetchCard = (targetUrl) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}${targetUrl}`);
      const data = res.data;
      dispatch(addDataBlog(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const { addDataBlog, changePage, changeCategory, setCard } =
  BlogReducer.actions;
export default BlogReducer.reducer;

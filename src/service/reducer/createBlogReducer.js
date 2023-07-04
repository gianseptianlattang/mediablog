import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DetailPage } from "../../pages/DetailPage";

const initialState = {
  dataBlog: {},
};

export const CreateBlogReducer = createSlice({
  name: "CreateBlogReducer",
  initialState,
  reducers: {
    createBlog: (state, action) => {
      state.dataBlog = action.payload;
    },
  },
});

export const fetchCreateBlog = (request) => {
  const { title, content, country, CategoryId, url, keywords, file } = request;
  const data = {
    title: title,
    content: content,
    CategoryId: CategoryId,
    country: country,
    keywords: keywords,
    url: url,
  };

  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("file", file);

  const token = localStorage.getItem("tokenLogin");
  return async (dispatch) => {
    const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";
    try {
      const res = await axios.post(`${baseUrl}api/blog`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.message === "Success Added") {
        dispatch(createBlog(data.data));
        return data.message;
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const { createBlog } = CreateBlogReducer.actions;
export default CreateBlogReducer.reducer;

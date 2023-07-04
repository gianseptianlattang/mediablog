import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../service/reducer/categoryReducer";
import { fetchCreateBlog } from "../../service/reducer/createBlogReducer";
import { useNavigate } from "react-router-dom";

const createBlogSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(150, "Maximum 150 character"),
  content: Yup.string()
    .required("Content is required")
    .max(500, "Maximum 500 character"),
});

export const CreateBlog = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataCategory } = useSelector((state) => state.dataCategory);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  function handleSelectValue(event) {
    formik.values.CategoryId = event.target.value;
  }

  const handleLogoutToast = () => {
    toast({
      description: "Article Created",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  function handleCreate() {
    handleLogoutToast();
    navigate("/detailpage");
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      country: "",
      CategoryId: "1",
      url: "",
      keywords: "",
    },
    validationSchema: createBlogSchema,
    onSubmit: async (values) => {
      const result = await dispatch(fetchCreateBlog(values));
      result === "Success Added" ? handleCreate() : <></>;
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={5}>
          <FormControl isInvalid={formik.touched.title && formik.errors.title}>
            <FormLabel>Title</FormLabel>
            <Input
              id="title"
              type="text"
              placeholder="Input title"
              maxLength={150}
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title && (
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Box textAlign={"left"}>
              <input
                id="image"
                type="file"
                accept="image/png"
                onChange={(e) =>
                  formik.setFieldValue("file", e.currentTarget.files[0])
                }
              />
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Box textAlign={"left"}>
              <Select onChange={handleSelectValue}>
                {dataCategory.length === 0 ? (
                  <option>All Category</option>
                ) : (
                  dataCategory.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })
                )}
              </Select>
            </Box>
          </FormControl>
          <FormControl
            isInvalid={formik.touched.content && formik.errors.content}
          >
            <FormLabel>Content</FormLabel>
            <Textarea
              id="content"
              type="text"
              placeholder="Write here"
              maxLength={500}
              h={"200px"}
              onChange={formik.handleChange}
              value={formik.values.content}
            />
            {formik.touched.content && formik.errors.content && (
              <FormErrorMessage>{formik.errors.content}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Keyword</FormLabel>
            <Input
              id="keywords"
              type="text"
              placeholder="Keyword"
              onChange={formik.handleChange}
              value={formik.values.keywords}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              id="country"
              type="text"
              placeholder="Country"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </FormControl>
        </Stack>
        <Button type="submit" m={"50px"} w={"300px"} colorScheme="teal">
          Publish
        </Button>
      </form>
    </Box>
  );
};

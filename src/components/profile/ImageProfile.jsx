import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

const uploadProfilePicture = async (test) => {
  const token = localStorage.getItem("tokenLogin");
  const url =
    "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded";

  const formData = new FormData();
  formData.append("file", test.profilePicture);
  console.log(formData);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);

  try {
    const response = await axios.post(url, formData, config);
    console.log(response.data); // Handle the response
  } catch (error) {
    console.log(error); // Handle error
  }
};

export const ImageProfile = () => {
  const { imgProfile } = useSelector((state) => state.authUser.user);
  const initialValues = {
    profilePicture: null,
  };

  const handleSubmit = async (values) => {
    console.log(values.profilePicture);
    await uploadProfilePicture(values);
    window.location.reload();
  };

  return (
    <Box p={4}>
      <Box>
        <Heading size="xl" color="black" fontWeight={"bold"} p={10}>
          My Profile
        </Heading>
      </Box>
      <Image
        src={`${baseUrl}${imgProfile}`}
        alt={"Profile Image"}
        boxSize="200px"
        borderRadius={"100%"}
        mx="auto"
        border={"2px"}
        borderColor={"blackAlpha.400"}
        boxShadow={"2xl"}
      />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="profilePicture">
              {({ field }) => (
                <FormControl ml={"50px"}>
                  <input
                    id="profilePicture"
                    type="file"
                    accept="image/png"
                    onChange={(event) =>
                      setFieldValue(field.name, event.target.files[0])
                    }
                  />
                </FormControl>
              )}
            </Field>

            <Button mt={2} colorScheme="teal" type="submit">
              Change Picture
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

import React from "react";
import { Box, FormControl, Button, Heading, Avatar } from "@chakra-ui/react";
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

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(url, formData, config);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const ImageProfile = () => {
  const dataProfile = useSelector((state) => state.authUser.user);
  const initialValues = {
    profilePicture: null,
  };

  const handleSubmit = async (values) => {
    let res = await uploadProfilePicture(values);
    if (res) {
      window.location.reload();
    }
  };

  return (
    <Box p={4}>
      <Box>
        <Heading size="xl" color="black" fontWeight={"bold"} p={10}>
          My Profile
        </Heading>
      </Box>
      <Avatar
        src={`${baseUrl}${dataProfile.imgProfile}`}
        name={dataProfile.username}
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
                <FormControl ml={"50px"} p={5}>
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

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalHeader,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonModal } from "./ButtonModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { closeFormModal } from "../../service/reducer/userReducer";
import { userLogin } from "../../service/reducer/authReducer";
import axios from "axios";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

const LoginSchema = Yup.object().shape({
  // username: Yup.string()
  //   .required("Email is required")
  //   .email("Invalid email address format"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address format"),
  // phone: Yup.string()
  //   .required("Email is required")
  //   .email("Invalid email address format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters")
    .matches(/[0-9]/, "Password must have min 1 number")
    .matches(/[A-Z]/, "Password must have min 1 capital character")
    .matches(/[!@#$%^&*)(+=.,_-]/, "Password must have min 1 symbol"),
});

const fetchUser = async (values) => {
  try {
    const { data } = await axios.post(`${baseUrl}api/auth/login`, values);
    if (data.isAccountExist) {
      localStorage.setItem("tokenLogin", data.token);
      return "success";
    }
  } catch (err) {
    console.log(err);
    return "error";
  }
};

export const ModalLogin = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const handleLoginToast = (props, content) => {
    toast({
      description: content,
      status: props,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  function closeModal() {
    dispatch(closeFormModal());
  }

  const formik = useFormik({
    initialValues: {
      // username: "",
      email: "",
      // phone: "",
      password: "",
    },
    validationSchema: LoginSchema,

    onSubmit: async (values) => {
      const userToast = await fetchUser(values);
      if (userToast === "success") {
        handleLoginToast("success", "Successfully logged in");
        dispatch(userLogin());
        closeModal();
      } else {
        handleLoginToast("error", "Failed to logged in");
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box>
      <ModalHeader>Sign in your account</ModalHeader>
      <ModalBody pb={5}>
        <form onSubmit={formik.handleSubmit}>
          <Flex
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={1} mx={"auto"} py={3} px={1}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign in
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool articles ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl
                    isInvalid={formik.touched.email && formik.errors.email}
                  >
                    <FormLabel>Username/Email/Phone</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="username/email/phone"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="password"
                        variant="filled"
                        placeholder="password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {formik.touched.password && formik.errors.password && (
                      <FormErrorMessage>
                        {formik.errors.password}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button type="submit" width="full" colorScheme="blue">
                      Sign in
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      No account? <ButtonModal modal="Sign Up" />
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      </ModalBody>
    </Box>
  );
};

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
import { setUser, userLogin } from "../../service/reducer/authReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

const LoginSchema = Yup.object().shape({
  loginInput: Yup.string().required("Username/Email/Phone is required"),
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
      return ["success", data];
    }
  } catch (err) {
    console.log(err);
    return "error";
  }
};

export const ModalLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      loginInput: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      let request = inputType(values.loginInput);
      const userToast = await fetchUser(request);
      if (
        userToast[0] === "success" &&
        userToast[1].isAccountExist.username === "admingian"
      ) {
        handleLoginToast("success", "Admin successfully logged in");
        dispatch(setUser(userToast[1].isAccountExist));
        dispatch(userLogin());
        closeModal();
        navigate("/admin");
      } else if (userToast[0] === "success") {
        handleLoginToast("success", "Successfully logged in");
        dispatch(setUser(userToast[1].isAccountExist));
        dispatch(userLogin());
        closeModal();
      } else {
        handleLoginToast("error", "Failed to logged in");
      }
    },
  });

  function inputType(req) {
    if (req.match(/^(\+62|62|0)8[1-9][0-9]/))
      return {
        phone: formik.values.loginInput,
        password: formik.values.password,
      };
    if (req.match(/^[\w\.]+@\w+\.\w{2,3}/))
      return {
        email: formik.values.loginInput,
        password: formik.values.password,
      };
    return {
      username: formik.values.loginInput,
      password: formik.values.password,
    };
  }

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
                    isInvalid={
                      formik.touched.loginInput && formik.errors.loginInput
                    }
                  >
                    <FormLabel>Username/Email/Phone</FormLabel>
                    <Input
                      id="loginInput"
                      type="text"
                      placeholder="username/email/phone"
                      onChange={formik.handleChange}
                      value={formik.values.loginInput}
                    />
                    {formik.touched.loginInput && formik.errors.loginInput && (
                      <FormErrorMessage>
                        {formik.errors.loginInput}
                      </FormErrorMessage>
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
                  <Stack spacing={10} pt={2}>
                    <Button variant={"link"} color={"blue.500"}>
                      Forgot Password
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

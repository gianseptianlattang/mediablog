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
import React from "react";
import { ButtonModal } from "./ButtonModal";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { closeFormModal } from "../../service/reducer/userReducer";
import { useDispatch } from "react-redux";

const phoneRegExp = /^(\+62|62|0)8[1-9][0-9]/;

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must have at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address format"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Invalid phone number format")
    .min(10, "Phone number must have at least 10 characters")
    .max(13, "Phone number not more than 13 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters")
    .matches(/[0-9]/, "Password must have min 1 number")
    .matches(/[A-Z]/, "Password must have min 1 capital character")
    .matches(/[!@#$%^&*)(+=.,_-]/, "Password must have min 1 symbol"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});

export const ModalRegist = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfimrPassword, setShowConfirmPassword] = useState(false);
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
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      closeModal();
    },
  });
  return (
    <Box>
      <ModalHeader>Create your account</ModalHeader>
      <ModalBody pb={5}>
        <form>
          <Flex
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={1} mx={"auto"} py={3} px={1}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign up
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool features ✌️
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
                      formik.touched.username && formik.errors.username
                    }
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      id="username"
                      type="text"
                      placeholder="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username && (
                      <FormErrorMessage>
                        {formik.errors.username}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    isInvalid={formik.touched.email && formik.errors.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="test@test.com"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.touched.loginInput && formik.errors.loginInput
                    }
                  >
                    <FormLabel>Phone</FormLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="085123456xxx"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    {formik.touched.loginInput && formik.errors.loginInput && (
                      <FormErrorMessage>
                        {formik.errors.loginInput}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        variant="filled"
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
                  </FormControl>
                  <FormControl id="confirmPassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="confirmPassword"
                        type={showConfimrPassword ? "text" : "password"}
                        variant="filled"
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowConfirmPassword(
                              (showPassword) => !showPassword
                            )
                          }
                        >
                          {showConfimrPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button type="submit" width="full" colorScheme="blue">
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user? <ButtonModal modal="Sign In" />
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

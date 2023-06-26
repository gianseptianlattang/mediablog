import {
  Box,
  Button,
  Flex,
  FormControl,
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
} from "@chakra-ui/react";
import React from "react";
import { ButtonModal } from "./ButtonModal";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const ModalRegist = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfimrPassword, setShowConfirmPassword] = useState(false);

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
                  <Box>
                    <FormControl>
                      <FormLabel>Username</FormLabel>
                      <Input id="fullname" type="text" />
                    </FormControl>
                  </Box>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input id="email" type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input id="email" type="tel" />
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

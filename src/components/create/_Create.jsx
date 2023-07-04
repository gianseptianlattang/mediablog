import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { CreateBlog } from "./CreatingBlog";

export const CreateCard = () => {
  return (
    <Center pt={"10px"}>
      <Box
        maxW={"800px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={10}
        textAlign={"center"}
      >
        <Heading p={10}>Create Blog</Heading>
        <CreateBlog />
      </Box>
    </Center>
  );
};

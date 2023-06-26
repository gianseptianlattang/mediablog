import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ImageProfile } from "./ImageProfile";
import { DataProfile } from "./DataProfile";

export const Profile = () => {
  return (
    <Center pt={"50px"}>
      <Box
        maxW={"800px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <ImageProfile />
        <DataProfile />
      </Box>
    </Center>
  );
};

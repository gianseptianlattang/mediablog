import { Avatar, Box, Heading } from "@chakra-ui/react";
import React from "react";

export const ImageProfile = () => {
  return (
    <Box>
      <Box pt={"50px"}>
        <Heading size="xl" color="black" fontWeight={"bold"} p={10}>
          My Profile
        </Heading>
        <Avatar
          src={"https://bit.ly/dan-abramov"}
          alt={"Profile Image"}
          boxSize="250px"
          mx="auto"
        />
      </Box>
    </Box>
  );
};

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
          src={
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
          alt={"Profile Image"}
          boxSize="250px"
          mx="auto"
        />
      </Box>
    </Box>
  );
};

import { Avatar, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const ImageProfile = () => {
  const { imgProfile } = useSelector((state) => state.authUser.user);
  return (
    <Box>
      <Box pt={"50px"}>
        <Heading size="xl" color="black" fontWeight={"bold"} p={10}>
          My Profile
        </Heading>
        <Avatar
          src={`${baseUrl}${imgProfile}`}
          alt={"Profile Image"}
          boxSize="250px"
          mx="auto"
        />
      </Box>
    </Box>
  );
};

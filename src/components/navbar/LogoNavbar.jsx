import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const LogoNavbar = () => {
  return (
    <Box>
      <Link to="/">
        <Flex alignItems="center">
          <BsFillPlayCircleFill size="40px" />{" "}
          <Text fontSize="3xl" as="b" fontFamily={"roboto"}>
            Media
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

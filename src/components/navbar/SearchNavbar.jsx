import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export const SearchNavbar = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search article..."
          w="300px"
          borderRadius="30px"
          border="2px"
          focusBorderColor="white.500"
          color={"black"}
          _placeholder={{ color: "inherit" }}
        />
      </InputGroup>
    </Box>
  );
};

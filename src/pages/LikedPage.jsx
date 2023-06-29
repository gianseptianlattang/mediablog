import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { CardLiked } from "../components/card/_CardLiked";

export const LikedPage = (category) => {
  return (
    <Box px={"150px"} py={"100px"}>
      <SimpleGrid columns={4} spacing={10} justifyItems={"center"} p={5}>
        <CardLiked />
      </SimpleGrid>
    </Box>
  );
};

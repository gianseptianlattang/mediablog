import React from "react";
import { CardFrame } from "./Card";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { PaginationCard } from "../pagination/_Pagination";

export const CardShow = () => {
  return (
    <Box px={"150px"} py={"40px"}>
      <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
        All Category..
      </Heading>
      <SimpleGrid columns={4} spacing={10} justifyItems={"center"} p={5}>
        <CardFrame />
      </SimpleGrid>
      <Box m={"50px"}>
        <PaginationCard />
      </Box>
    </Box>
  );
};

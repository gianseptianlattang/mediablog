import React from "react";
import { CardFrame } from "./Card";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { PaginationCard } from "../pagination/_Pagination";

export const CardShow = (categroy) => {
  return (
    <Box px={"150px"} py={"40px"}>
      <Heading size="xl" fontWeight={"bold"}>
        {categroy.name}
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

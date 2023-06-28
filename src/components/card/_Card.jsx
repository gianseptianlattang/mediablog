import React from "react";
import { CardFrame } from "./Card";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { PaginationCard } from "../pagination/_Pagination";
import { SelectCard } from "./SelectCard";

export const CardShow = (category) => {
  return (
    <Box px={"150px"} py={"40px"}>
      {category ? (
        <Heading size="xl" fontWeight={"bold"}>
          {category.name}
        </Heading>
      ) : (
        <SelectCard />
      )}

      <SimpleGrid columns={4} spacing={10} justifyItems={"center"} p={5}>
        <CardFrame />
      </SimpleGrid>
      <Box m={"50px"}>
        <PaginationCard />
      </Box>
    </Box>
  );
};

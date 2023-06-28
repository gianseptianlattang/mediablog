import React from "react";
import { Box } from "@chakra-ui/react";
import { CardShow } from "../components/card/_Card";
import { SelectCard } from "../components/card/SelectCard";

export const CategoryPage = () => {
  return (
    <Box pt={"100px"}>
      <SelectCard />
      <CardShow />
    </Box>
  );
};

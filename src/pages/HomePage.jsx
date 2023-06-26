import React from "react";
import { Box } from "@chakra-ui/react";
import { Carousel } from "../components/carousel/_Carousel";
import { Category } from "../components/category/_Category";
import { CardShow } from "../components/card/_Card";

export const HomePage = () => {
  return (
    <Box>
      <Carousel />
      <Category />
      <CardShow />
    </Box>
  );
};

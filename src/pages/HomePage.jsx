import React from "react";
import { Box } from "@chakra-ui/react";
import { Carousel } from "../components/carousel/_Carousel";
import { Category } from "../components/category/_Category";
import { CardBox } from "../components/card/_Card";

export const HomePage = () => {
  return (
    <Box>
      <Carousel />
      <Category />
      <CardBox />
    </Box>
  );
};

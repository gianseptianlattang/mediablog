import { Box } from "@chakra-ui/react";
import React from "react";
import { CarouselFav } from "./CarouselFav";
import { CarouselNew } from "./CarouselNew";

export const Carousel = () => {
  return (
    <Box>
      <CarouselFav />
      <CarouselNew />
    </Box>
  );
};

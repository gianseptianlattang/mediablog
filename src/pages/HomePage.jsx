import React from "react";
import { Navbar } from "../components/navbar/_Navbar";
import { Box } from "@chakra-ui/react";
import { CarouselTop5 } from "../components/carousel/_CarouselTop5";

export const HomePage = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <CarouselTop5 />
      </Box>
    </Box>
  );
};

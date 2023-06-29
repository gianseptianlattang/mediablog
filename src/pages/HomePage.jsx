import React from "react";
import { Box } from "@chakra-ui/react";
import { Carousel } from "../components/carousel/_Carousel";
import { Category } from "../components/category/_Category";
import { CardShow } from "../components/card/_Card";
import Footer from "../components/footer/_Footer";

export const HomePage = () => {
  return (
    <Box>
      <Carousel />
      <Category />
      <CardShow name={"All Articles.."} />
      <Footer />
    </Box>
  );
};

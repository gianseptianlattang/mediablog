import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { DetailBlogPage } from "../components/detailPage/_DetailPage";

export const DetailPage = (data) => {
  return (
    <Box pt={"100px"}>
      <DetailBlogPage dataDetail={data} />
    </Box>
  );
};

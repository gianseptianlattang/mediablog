import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const DetailBlogPage = () => {
  const dataDetaiBlog = useSelector((state) => state.dataBlog.dataBlog);
  return (
    <Center pt={"10px"}>
      <Box
        maxW={"1000px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={10}
        textAlign={"center"}
      >
        <Heading py={10} textAlign={"left"}>
          {dataDetaiBlog.title}
        </Heading>
        <Center>
          <Image
            w={"600px"}
            h={"400px"}
            src={`https://minpro-blog.purwadhikabootcamp.com/${dataDetaiBlog.imageURL}`}
          />
        </Center>
        <Text border={1} boxShadow={"2xl"} mt="50px" p={10} textAlign={"left"}>
          {dataDetaiBlog.content}
        </Text>
      </Box>
    </Center>
  );
};

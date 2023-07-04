import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export const DetailBlogPage = (dataDetail) => {
  return (
    <Center pt={"10px"}>
      <Box
        maxW={"1000px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={10}
        textAlign={"center"}
      >
        <Heading py={10} textAlign={"left"}>
          Test
        </Heading>
        <Text pb={10} textAlign={"left"}>
          Publisher
        </Text>
        <Center>
          <Image
            w={"600px"}
            h={"400px"}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          />
        </Center>
        <Text
          h={"400px"}
          border={1}
          boxShadow={"2xl"}
          mt="50px"
          p={10}
          textAlign={"left"}
        >
          Content
        </Text>
      </Box>
    </Center>
  );
};

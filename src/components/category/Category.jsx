import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CategoryBlog = () => {
  const [category, setCategory] = useState([]);
  const [dataImage, setImage] = useState([]);

  const nameCategory = category.map((item) => item.name);

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/blog/allCategory`);
      const data = res.data;
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFav = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/blog/pagFav`);
      const data = res.data.result;
      const favCategory = data.map((item) => [item.CategoryId, item.imageURL]);
      const favLength = favCategory.length;
      let imageCategory = [];
      for (let i = 0; i < favLength; i++) {
        for (const data of favCategory) {
          if (data[0] === i + 1) {
            imageCategory[i] = data[1];
            break;
          }
        }
      }
      setImage(imageCategory);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchFav();
  }, []);

  return (
    <Box px={"300px"} py={"50px"} backgroundColor={"#FCD19C"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Category..
        </Heading>
      </Stack>

      <Grid
        h="1000px"
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={7}
        px={"50px"}
        py={"20px"}
      >
        <GridItem
          colSpan={3}
          backgroundImage={`${baseUrl}${dataImage[0]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[0]}
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={3}
          backgroundImage={`${baseUrl}${dataImage[1]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[1]}
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          backgroundImage={`${baseUrl}${dataImage[2]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[2]}
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          backgroundImage={`${baseUrl}${dataImage[3]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[3]}
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          backgroundImage={`${baseUrl}${dataImage[4]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[4]}
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={3}
          backgroundImage={`${baseUrl}${dataImage[5]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[5]}
            </Heading>
          </Box>
        </GridItem>
        <GridItem
          colSpan={3}
          backgroundImage={`${baseUrl}${dataImage[6]}`}
          boxShadow={"xl"}
        >
          <Box
            backgroundColor={"blackAlpha.600"}
            m={"50px"}
            py={"5px"}
            borderRadius={"10px"}
          >
            <Heading size="lg" color="white">
              {nameCategory[6]}
            </Heading>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

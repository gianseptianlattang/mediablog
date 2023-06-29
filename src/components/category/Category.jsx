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
import { Link } from "react-router-dom";

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
    let imageCategory = [];
    try {
      for (let i = 1; i <= 7; i++) {
        const res = await axios.get(
          `${baseUrl}api/blog/pagFav?page=1&orderBy=total_fav&sort=DESC&id_cat=${i}&size=20`
        );
        imageCategory.push(res.data.result[0]);
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

  if (dataImage.length > 0) {
    return (
      <Box px={"300px"} py={"50px"} backgroundColor={"#FCD19C"}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading size="xl" fontWeight={"bold"}>
            Categories..
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
            backgroundImage={`${baseUrl}${dataImage[0].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                h={"200px"}
                borderRadius={"10px"}
              >
                <Heading size="lg" color="white" pt={"75px"}>
                  {nameCategory[0]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            colSpan={3}
            backgroundImage={`${baseUrl}${dataImage[1].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            bgPos={"center"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                borderRadius={"10px"}
                h={"200px"}
              >
                <Heading size="lg" color="white" pt="75px">
                  {nameCategory[1]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            colSpan={2}
            backgroundImage={`${baseUrl}${dataImage[2].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                borderRadius={"10px"}
                h={"200px"}
              >
                <Heading size="lg" color="white" pt="75px">
                  {nameCategory[2]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            colSpan={2}
            backgroundImage={`${baseUrl}${dataImage[3].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                borderRadius={"10px"}
                h="200px"
              >
                <Heading size="lg" color="white" pt="75px">
                  {nameCategory[3]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            colSpan={2}
            backgroundImage={`${baseUrl}${dataImage[4].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                borderRadius={"10px"}
                h="200px"
              >
                <Heading size="lg" color="white" pt="75px">
                  {nameCategory[4]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            colSpan={3}
            backgroundImage={`${baseUrl}${dataImage[5].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                borderRadius={"10px"}
                h="200px"
              >
                <Heading size="lg" color="white" pt="75px">
                  {nameCategory[5]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            colSpan={3}
            backgroundImage={`${baseUrl}${dataImage[6].imageURL}`}
            boxShadow={"xl"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.07)",
            }}
          >
            <Link to={"/category"}>
              <Box
                backgroundColor={"blackAlpha.600"}
                m={"50px"}
                py={"5px"}
                borderRadius={"10px"}
                h="200px"
              >
                <Heading size="lg" color="white" pt="75px">
                  {nameCategory[6]}
                </Heading>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    );
  }
};

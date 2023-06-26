import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CarouselNew = () => {
  const [newBlog, setNewBlog] = useState([]);

  const fetchNewBlog = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}api/blog?id_cat=&sort=DESC&page=1`
      );
      const data = res.data.result;
      setNewBlog(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewBlog();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Box backgroundColor={"black"} pt={"20px"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        color={"white"}
      >
        New Article..
      </Heading>
      <Box px={"60px"}>
        <Slider {...settings}>
          {newBlog.map((item) => {
            return (
              <Card>
                <CardBody backgroundColor={"black"}>
                  <Center>
                    <Image
                      w={"200px"}
                      h={"150px"}
                      src={`${baseUrl}${item.imageURL}`}
                      alt={item.title}
                      borderRadius="lg"
                    />
                  </Center>
                  <Stack>
                    <Heading color={"white"} size="md">
                      {item.title}
                    </Heading>
                    <Text color={"white"}>{item.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};
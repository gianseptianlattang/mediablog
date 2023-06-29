import {
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

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";
const token = localStorage.getItem("tokenLogin");

export const CardLiked = () => {
  const [dataLiked, setLiked] = useState([]);

  const fetchLike = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}api/blog/pagLike`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLiked(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchLike();
    }
  }, []);

  if (dataLiked.length > 0) {
    return dataLiked.map((item) => {
      return (
        <Card w={"350px"} h={"400px"}>
          <CardBody>
            <Center>
              <Image
                src={`${baseUrl}${item.imageURL}`}
                alt={item.Blog.title}
                borderRadius="lg"
                h={"150px"}
                maxW={"full"}
              />
            </Center>

            <Stack mt="6" spacing="3">
              <Heading noOfLines={1} size="md">
                {item.title}
              </Heading>
              <Text noOfLines={2}>{item.Blog.content}</Text>
            </Stack>
          </CardBody>
        </Card>
      );
    });
  }
};

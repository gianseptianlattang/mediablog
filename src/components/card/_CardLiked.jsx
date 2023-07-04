import {
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../service/reducer/createBlogReducer";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";
const token = localStorage.getItem("tokenLogin");

export const CardLiked = () => {
  const [dataLiked, setLiked] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchLike = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}api/blog/pagLike?size=200`, {
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

  function handleReadMore(item) {
    dispatch(createBlog(item));
    navigate("/detailpage");
  }

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
                {item.Blog.title}
              </Heading>
              <Text noOfLines={2}>{item.Blog.content}</Text>
            </Stack>
          </CardBody>
          <Divider />

          <Flex p={"30px"} justifyContent="space-between">
            <Button
              onClick={() => handleReadMore(item.Blog)}
              variant="solid"
              colorScheme="orange"
            >
              Read More
            </Button>
            <Spacer />
          </Flex>
        </Card>
      );
    });
  }
};

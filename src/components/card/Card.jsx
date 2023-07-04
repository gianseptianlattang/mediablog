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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../service/reducer/blogReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../service/reducer/createBlogReducer";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CardFrame = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.blogUser.pageBlog);
  const targetUrl = "api/blog?&sort=DESC&page=1&size=12";
  const token = localStorage.getItem("tokenLogin");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLoginToast = (props, content) => {
    toast({
      description: content,
      status: props,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const addLike = async (idBlog) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}api/blog/like`,
        {
          BlogId: idBlog,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data === "Like added") {
        handleLoginToast("success", "You have liked it!!");
      }
    } catch (err) {
      console.log(err);
      handleLoginToast("error", "Please check again");
    }
  };

  useEffect(() => {
    dispatch(fetchCard(targetUrl));
  }, []);

  function handleReadMore(item) {
    console.log(item);
    dispatch(createBlog(item));
    navigate("/detailpage");
  }

  if (result.length !== 0) {
    return result.map((item) => {
      return (
        <Card w={"350px"} h={"400px"}>
          <CardBody>
            <Center>
              <Image
                src={`${baseUrl}${item.imageURL}`}
                alt={item.title}
                borderRadius="lg"
                h={"150px"}
                maxW={"full"}
              />
            </Center>

            <Stack mt="6" spacing="3">
              <Heading noOfLines={1} size="md">
                {item.title}
              </Heading>
              <Text noOfLines={2}>{item.content}</Text>
            </Stack>
          </CardBody>
          <Divider />

          <Flex p={"30px"} justifyContent="space-between">
            <Button
              onClick={() => handleReadMore(item)}
              variant="solid"
              colorScheme="orange"
            >
              Read More
            </Button>
            <Spacer />
            <Button
              onClick={() => addLike(item.id)}
              variant="outline"
              leftIcon={<FcLike />}
            >
              Like
            </Button>
          </Flex>
        </Card>
      );
    });
  }
};

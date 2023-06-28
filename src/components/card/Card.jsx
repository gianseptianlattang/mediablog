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
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { addDataBlog } from "../../service/reducer/blogReducer";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CardFrame = () => {
  const dispatch = useDispatch();
  const [card, setCard] = useState([]);
  const dataPage = useSelector(
    (state) => state.blogUser.requestBlogAllCategory
  );

  const fetchCard = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}api/blog?sort=DESC&page=${dataPage.page}&size=12`
      );
      const data = res.data;
      setCard(data.result);
      dispatch(addDataBlog(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCard();
  }, [dataPage]);

  return card.map((item) => {
    return (
      <Card w={"350px"} h={"450px"}>
        <CardBody>
          <Center>
            <Image
              src={`${baseUrl}${item.imageURL}`}
              alt={item.title}
              borderRadius="lg"
              h={"200px"}
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
          <Button variant="solid" colorScheme="orange">
            Read More
          </Button>
          <Spacer />
          <Button variant="outline" leftIcon={<FcLike />}>
            Like
          </Button>
        </Flex>
      </Card>
    );
  });
};

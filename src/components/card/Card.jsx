import {
  Button,
  Card,
  CardBody,
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

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CardFrame = () => {
  const [card, setCard] = useState([]);

  const fetchCard = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/blog?sort=DESC&page=1`);
      const data = res.data.result;
      setCard(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return card.map((item) => {
    return (
      <Card w={"350px"}>
        <CardBody>
          <Image
            src={`${baseUrl}${item.imageURL}`}
            alt={item.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text>{item.content}</Text>
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

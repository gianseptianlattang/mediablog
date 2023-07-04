import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { createBlog } from "../../service/reducer/createBlogReducer";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CarouselNew = () => {
  const [newBlog, setNewBlog] = useState([]);
  const dispatch = useDispatch();

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

  function handleReadMore(item) {
    dispatch(createBlog(item));
  }
  return (
    <Box backgroundColor={"black"} pt={"20px"}>
      <Heading size="xl" color="white" fontWeight={"bold"}>
        New Articles..
      </Heading>
      <Box px={"60px"}>
        <Slider {...settings}>
          {newBlog.map((item) => {
            return (
              <Card>
                <Link onClick={() => handleReadMore(item)} to={"/detailpage"}>
                  <CardBody
                    backgroundColor={"black"}
                    transition="0.2s ease-in-out"
                    _hover={{
                      transform: "scale(1.07)",
                    }}
                  >
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
                      <Heading color={"white"} size="md" noOfLines={1}>
                        {item.title}
                      </Heading>
                    </Stack>
                  </CardBody>
                </Link>
              </Card>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

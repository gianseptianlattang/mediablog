import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";
import { hotelCards } from "./DataDummy";

export const Carousel1 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <Box backgroundColor={"rgb(242, 77, 46)"} px={"300px"} py={"100px"}>
      <Heading size="xl" color="white" fontWeight={"bold"} p={3}>
        Top 10 Articles..
      </Heading>
      <Flex>
        <Box w={"80%"}>
          <Slider
            arrows={false}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            fade={true}
            speed={1000}
          >
            {hotelCards.map((item) => {
              return (
                <Box
                  backgroundImage={item.imageSrc}
                  h={"600px"}
                  borderRadius={"50px"}
                >
                  <Box
                    position="absolute"
                    bottom="50px"
                    left="50px"
                    textAlign="left"
                    backgroundColor={"blackAlpha.600"}
                    px={"10px"}
                    pb={"5px"}
                    borderRadius={"10px"}
                  >
                    <Heading size="xl" color="white">
                      {item.title}
                    </Heading>
                    <Text as="b" fontSize="xl" color="white">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        </Box>
        <Box w={"20%"} py={1}>
          {/* Up Icon */}
          <IconButton
            aria-label="up-arrow"
            variant="ghost"
            isRound={true}
            zIndex={2}
            onClick={() => nav2?.slickPrev()}
            _hover={{
              backgroundColor: "transparent",
              transform: "scale(1.1)",
            }}
          >
            <AiOutlineUpCircle size="40px" />
          </IconButton>
          <Slider
            arrows={false}
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            infinite={true}
            slidesToScroll={1}
            vertical={true}
            verticalSwiping={true}
            autoplay={true}
            autoplaySpeed={3000}
            pauseOnHover={true}
          >
            {hotelCards.map((item) => {
              return (
                <Box>
                  <Center>
                    <Image
                      w={"180px"}
                      h={"120px"}
                      src={item.imageSrc}
                      alt={item.title}
                      borderRadius="lg"
                    />
                  </Center>
                </Box>
              );
            })}
          </Slider>
          {/* Down Icon */}
          <IconButton
            aria-label="down-arrow"
            variant="ghost"
            isRound={true}
            zIndex={2}
            onClick={() => nav2?.slickNext()}
            _hover={{
              backgroundColor: "transparent",
              transform: "scale(1.1)",
            }}
          >
            <AiOutlineDownCircle size="40px" />
          </IconButton>
        </Box>
      </Flex>
    </Box>
  );
};

export const Carousel2 = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Box backgroundColor={"black"} py={"20px"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        color={"white"}
      >
        New Article..
      </Heading>
      <Box px={"60px"}>
        <Slider {...settings}>
          {hotelCards.map((item) => {
            return (
              <Card maxW="sm">
                <CardBody backgroundColor={"black"}>
                  <Center>
                    <Image
                      boxShadow={"2xl"}
                      w={"200px"}
                      h={"150px"}
                      src={item.imageSrc}
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

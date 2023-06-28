import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";
import axios from "axios";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const CarouselFav = () => {
  const [fav, setFav] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const fetchFav = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/blog/pagFav`);
      const data = res.data.result;
      setFav(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    fetchFav();
  }, []);

  return (
    <Box backgroundColor={"rgb(242, 77, 46)"} px={"300px"} py={"100px"}>
      <Heading size="xl" color="white" fontWeight={"bold"} p={3}>
        Top Articles..
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
            {fav.map((item) => {
              return (
                <Box
                  backgroundImage={`${baseUrl}${item.imageURL}`}
                  h={"600px"}
                  borderRadius={"50px"}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  bgPos={"center"}
                >
                  <Box
                    position="absolute"
                    bottom="50px"
                    left="50px"
                    textAlign="left"
                    backgroundColor={"blackAlpha.600"}
                    px={"10px"}
                    pb={"5px"}
                    w={"600px"}
                    borderRadius={"10px"}
                  >
                    <Heading size="lg" color="white" noOfLines={1}>
                      {item.title}
                    </Heading>
                    <Text color={"white"} noOfLines={2}>
                      {item.content}
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
            {fav.map((item) => {
              return (
                <Box>
                  <Center>
                    <Image
                      w={"180px"}
                      h={"120px"}
                      src={`${baseUrl}${item.imageURL}`}
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

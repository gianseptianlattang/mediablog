import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";

export const Category1 = () => {
  return (
    <Box px={"200px"} py={"50px"} backgroundColor={"#FCD19C"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Category..
        </Heading>
      </Stack>

      <Grid
        h="1000px"
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={7}
        px={"50px"}
        py={"10px"}
      >
        <GridItem colSpan={3} bg="white" />
        <GridItem colSpan={2} bg="white" />
        <GridItem colSpan={2} bg="white" />
        <GridItem colSpan={3} bg="white" />
        <GridItem colSpan={3} bg="white" />
        <GridItem colSpan={2} bg="white" />
      </Grid>
    </Box>
  );
};

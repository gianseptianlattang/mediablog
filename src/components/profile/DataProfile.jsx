import { Box, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonEdit, ButtonSave } from "./ButtonEdit";
import { useSelector } from "react-redux";

export const DataProfile = () => {
  const edit = useSelector((state) =>
    JSON.parse(state.changeProfileEdit.dataProfile)
  );
  console.log(`edit ${edit}`);
  console.log(`test ${typeof edit}`);
  return (
    <Box>
      <Grid
        mt={"100px"}
        mx={"50px"}
        p={"50px"}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={"70px"}
        borderRadius={"10px"}
        boxShadow={"dark-lg"}
      >
        <GridItem colSpan={1}>
          <Text
            align={"left"}
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
          >
            Username
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          {edit ? (
            <Input value={"Gian"} />
          ) : (
            <Text
              fontSize={"xl"}
              fontWeight={500}
              fontFamily={"body"}
              align={"left"}
            >
              : Gian
            </Text>
          )}
        </GridItem>
        <GridItem colSpan={1}>
          <Text
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
            align={"left"}
          >
            Email
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          {edit ? (
            <Input value={"gian@test.com"} />
          ) : (
            <Text
              fontSize={"xl"}
              fontWeight={500}
              fontFamily={"body"}
              align={"left"}
            >
              : gian@test.com
            </Text>
          )}
        </GridItem>
        <GridItem colSpan={1}>
          <Text
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
            align={"left"}
          >
            Phone
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          {edit ? (
            <Input value="08765434567" />
          ) : (
            <Text
              fontSize={"xl"}
              fontWeight={500}
              fontFamily={"body"}
              align={"left"}
            >
              : 08765434567
            </Text>
          )}
        </GridItem>
      </Grid>
      {edit ? <ButtonSave /> : <ButtonEdit />}
    </Box>
  );
};

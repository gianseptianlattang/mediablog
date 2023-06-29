import { Box, Button, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonEdit, ButtonSave } from "./ButtonEdit";
import { useSelector } from "react-redux";

export const DataProfile = () => {
  const edit = useSelector((state) =>
    JSON.parse(state.changeProfileEdit.dataProfile)
  );
  const { username, email, phone } = useSelector(
    (state) => state.authUser.user
  );
  return (
    <Box>
      <Grid
        mt={"100px"}
        mx={"50px"}
        p={"50px"}
        templateRows="repeat(5, 1fr)"
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
            <Input value={username} />
          ) : (
            <Text
              fontSize={"xl"}
              fontWeight={500}
              fontFamily={"body"}
              align={"left"}
            >
              : {username}
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
            <Input value={email} />
          ) : (
            <Text
              fontSize={"xl"}
              fontWeight={500}
              fontFamily={"body"}
              align={"left"}
            >
              : {email}
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
            <Input value={phone} />
          ) : (
            <Text
              fontSize={"xl"}
              fontWeight={500}
              fontFamily={"body"}
              align={"left"}
            >
              : {phone}
            </Text>
          )}
        </GridItem>
        <GridItem colSpan={2}>
          {edit ? <Button colorScheme="teal">Reset Password</Button> : <></>}
        </GridItem>
      </Grid>
      {edit ? <ButtonSave /> : <ButtonEdit />}
    </Box>
  );
};

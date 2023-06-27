import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { profileEdit } from "../../service/reducer/profileReducer";

export const ButtonSave = () => {
  const dispatch = useDispatch();
  const cancelEdit = () => {
    dispatch(profileEdit(false));
  };
  return (
    <Box>
      <Flex gap={5} justifyContent={"center"}>
        <Button my={"150px"} w={"100px"} colorScheme="blue">
          Save
        </Button>
        <Button
          my={"150px"}
          w={"100px"}
          colorScheme="blue"
          onClick={cancelEdit}
        >
          Cancel
        </Button>
      </Flex>
    </Box>
  );
};

export const ButtonEdit = () => {
  const dispatch = useDispatch();
  const changeEdit = () => {
    dispatch(profileEdit(true));
  };
  return (
    <Box>
      <Button my={"150px"} w={"100px"} colorScheme="blue" onClick={changeEdit}>
        Edit
      </Button>
    </Box>
  );
};

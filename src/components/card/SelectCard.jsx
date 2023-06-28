import { Box, Center, Flex, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../service/reducer/categoryReducer";

export const SelectCard = () => {
  const [idCategory, setCategory] = useState(0);
  console.log(idCategory);
  const dispatch = useDispatch();
  const { dataCategory } = useSelector((state) => state.dataCategory);

  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, [idCategory]);

  function handleSelectValue(event) {
    setCategory(event.target.value);
  }

  return (
    <Box pl={"100px"}>
      <Flex>
        <Center>
          <Text fontWeight={"bold"}>Choose Category :</Text>
          <Box w={"200px"} p={"20px"}>
            <Select onChange={handleSelectValue}>
              <option value={0}>All Category</option>
              {dataCategory.length === 0 ? (
                <option>All Category</option>
              ) : (
                dataCategory.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })
              )}
            </Select>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};

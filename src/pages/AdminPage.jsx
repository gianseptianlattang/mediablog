import React from "react";
import { Box, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const verify = async () => {
  const token = localStorage.getItem("tokenRegist");
  try {
    const { data } = await axios.patch(
      "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.message === "Verification success") {
      return "success";
    }
  } catch (err) {
    console.log(err);
    return "error";
  }
};

export const AdminPage = () => {
  const toast = useToast();

  const handleLoginToast = (props, content) => {
    toast({
      description: content,
      status: props,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box pt={"200px"}>
      <Button
        colorScheme="teal"
        boxSize={"100px"}
        onClick={async () => {
          const userToast = await verify();
          if (userToast === "success") {
            handleLoginToast("success", "Account verified");
          } else {
            handleLoginToast("error", "Please check again");
          }
          verify();
        }}
      >
        Verify
      </Button>
    </Box>
  );
};

import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonSolidNavbar = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  return (
    <Button
      onClick={toLogin}
      borderRadius="full"
      colorScheme="blackAlpha"
      size="md"
    >
      Start Writing
    </Button>
  );
};

export const ButtonLinkNavbar = (props) => {
  return (
    <Box>
      <Button
        onClick={() => window.open("/login")}
        color="black"
        variant="link"
      >
        {props.name}
      </Button>
    </Box>
  );
};

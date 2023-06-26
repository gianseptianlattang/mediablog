import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { SearchNavbar } from "./SearchNavbar";
import { ButtonLinkNavbar, ButtonSolidNavbar } from "./ButtonNavbar";
import { LogoNavbar } from "./LogoNavbar";

export const Navbar = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      background="rgb(242, 77, 46)"
      borderBottom="2px"
      px="60px"
      py="3"
      gap={5}
      position="fixed"
      width="100%"
      zIndex={"20"}
    >
      <LogoNavbar />
      <SearchNavbar />
      <ButtonSolidNavbar />
      <Spacer />
      <ButtonLinkNavbar modal="Sign In" />
      <ButtonLinkNavbar modal="Sign Up" />
    </Flex>
  );
};

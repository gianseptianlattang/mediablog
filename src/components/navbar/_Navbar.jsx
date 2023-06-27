import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { SearchNavbar } from "./SearchNavbar";
import { ButtonLinkNavbar, ButtonStartWriting } from "./ButtonNavbar";
import { LogoNavbar } from "./LogoNavbar";
import { ProfileNavbar } from "./ProfileNavbar";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const isLogin = useSelector((state) => state.changeModal.isLogin);

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
      <ButtonStartWriting />
      <Spacer />
      {isLogin ? <ProfileNavbar /> : <ButtonLinkNavbar />}
    </Flex>
  );
};

import React from "react";

import { Box, Container, useDisclosure } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SideDrawer from "../components/SideDrawer";

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box fontFamily={`'Public Sans', sans-serif`}>
      <Sidebar />

      <SideDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />

      <Container maxW="2xl">
        <Navbar btnRef={btnRef} onOpen={onOpen} />

        {children}
      </Container>
    </Box>
  );
};

export default Layout;

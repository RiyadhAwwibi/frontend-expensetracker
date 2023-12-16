import React from "react";

import { Box, Container } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Box fontFamily={`'Public Sans', sans-serif`}>
      <Container maxW="2xl">
        <Navbar />

        {children}
      </Container>
    </Box>
  );
};

export default Layout;

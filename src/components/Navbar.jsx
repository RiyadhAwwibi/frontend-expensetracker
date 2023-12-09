import React from "react";

import { Box, Button, Flex, Heading, chakra } from "@chakra-ui/react";

import { MdMenu } from "react-icons/md";

const Navbar = ({ btnRef, onOpen }) => {
  return (
    <Box as="nav" py="3rem">
      <Flex gap={3}>
        <chakra.div display={{ base: "block", md: "none" }}>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <MdMenu />
          </Button>
        </chakra.div>

        <Heading>Money Expense</Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;

import React from "react";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" py="3rem">
      <Flex gap={3} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Money Expense</Heading>
        <Box>
          <Menu>
            <MenuButton>
              <Avatar name="Riyad Awwibi" />
            </MenuButton>
            <MenuList>
              <MenuItem>You Profile</MenuItem>
              <MenuItem>Setting</MenuItem>
              <MenuItem color="red">Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

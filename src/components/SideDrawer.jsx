import React from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";

const SideDrawer = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <Flex direction="column" gap={4}>
            <chakra.div
              p={3}
              rounded="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              _hover={{
                backgroundColor: "#FAFAFA",
              }}
              cursor="pointer"
              as={Link}
              to="/"
            >
              <MdDashboard />
              <chakra.span>Dashboard</chakra.span>
            </chakra.div>
            <chakra.div
              p={3}
              rounded="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              _hover={{
                backgroundColor: "#FAFAFA",
              }}
              cursor="pointer"
              as={Link}
              to="/add-incomes"
            >
              <MdDashboard />
              <chakra.span>Income</chakra.span>
            </chakra.div>
            <chakra.div
              p={3}
              rounded="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              _hover={{
                backgroundColor: "#FAFAFA",
              }}
              cursor="pointer"
              as={Link}
              to="/add-expense"
            >
              <MdDashboard />
              <chakra.span>Expense</chakra.span>
            </chakra.div>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;

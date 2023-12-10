import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex, chakra } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      p={4}
      sx={{
        position: "absolute",
        height: "100vh",
        left: "0",
        top: "0",
        backgroundColor: "#f3fff4",
      }}
    >
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
    </Box>
  );
};

export default Sidebar;

import React from "react";

import { Box, Text, Heading, Flex } from "@chakra-ui/react";

import Layout from "../layout";

const Dashboard = () => {
  return (
    <Layout>
      <Box p="3rem" bgColor="#DBF7E9" rounded="xl" mt={5} color="green.800">
        <Heading as="h1" size="lg">
          Hello World 👋
        </Heading>
        <Text as="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          maiores ipsa praesentium.
        </Text>
      </Box>

      <Flex>
        <Box></Box>
        <Box></Box>
      </Flex>
    </Layout>
  );
};

export default Dashboard;

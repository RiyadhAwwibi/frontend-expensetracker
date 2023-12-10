import React from "react";

import {
  Box,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import Layout from "../layout";
import ListIncomes from "./ListIncomes";
import ListExpense from "./ListExpense";

const Dashboard = () => {
  return (
    <Layout>
      <Box p="3rem" bgColor="#DBF7E9" rounded="xl" my={5} color="green.800">
        <Heading as="h1" size="lg">
          Hello World 👋
        </Heading>
        <Text as="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          maiores ipsa praesentium.
        </Text>
      </Box>

      <Tabs isFitted>
        <TabList>
          <Tab>Pemasukan</Tab>
          <Tab>Pengeluaran</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ListIncomes />
          </TabPanel>
          <TabPanel>
            <ListExpense />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;

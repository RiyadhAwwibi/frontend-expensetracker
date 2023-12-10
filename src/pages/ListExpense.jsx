import React, { useEffect } from "react";

import dayjs from "dayjs";
import {
  Box,
  chakra,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { CiEdit, CiMenuKebab, CiTrash } from "react-icons/ci";

import { useGlobalContext } from "../context/GlobalContext";

const ListExpense = () => {
  const { getAllIncomes, incomes, isLoading } = useGlobalContext();
  useEffect(() => {
    getAllIncomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <chakra.h1 mb={6}>Pengeluaran</chakra.h1>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Accordion allowMultiple>
          {incomes.map((item) => (
            <ItemList key={item._id} item={item} />
          ))}
        </Accordion>
      )}
    </>
  );
};

const ItemList = ({ item }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <chakra.p color="green" fontWeight="bold">
              Rp. {item.amount}
            </chakra.p>
            <chakra.p
              color="gray"
              sx={{
                fontSize: "14px",
              }}
            >
              {item.category}
            </chakra.p>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <chakra.p
            color="gray"
            sx={{
              fontSize: "14px",
            }}
          >
            dibuat : {dayjs(item.createdAt).format("DD/MM/YYYY")}
          </chakra.p>
          <ButtonListOption />
        </Flex>
        <Box>{item.description}</Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

const ButtonListOption = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Option"
        icon={<CiMenuKebab />}
        variant="ghost"
        size="sm"
      />
      <MenuList>
        <MenuItem icon={<CiEdit />}>Edit</MenuItem>
        <MenuItem color="red" icon={<CiTrash />}>
          Hapus
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ListExpense;
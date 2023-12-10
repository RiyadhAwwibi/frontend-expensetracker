import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  Input,
} from "@chakra-ui/react";
import { CiEdit, CiMenuKebab, CiTrash } from "react-icons/ci";

import { useGlobalContext } from "../context/GlobalContext";

const ListExpense = () => {
  const [date, setDate] = useState("");
  const { getAllExpense, expenses, isLoading } = useGlobalContext();
  useEffect(() => {
    getAllExpense(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <>
      <Flex mb={6}>
        <Box>
          <Input
            type="month"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Box>
      </Flex>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Accordion allowMultiple>
          {expenses?.map((item) => (
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
            <chakra.p color="red" fontWeight="bold">
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
          <ButtonListOption id={item._id} />
        </Flex>
        <Box>{item.description}</Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

const ButtonListOption = ({ id }) => {
  const { deleteExpense } = useGlobalContext();

  const handleDelete = () => {
    deleteExpense(id);
  };

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
        <MenuItem icon={<CiEdit />} as={Link} to={`/edit-expense/${id}`}>
          Edit
        </MenuItem>
        <MenuItem
          color="red"
          icon={<CiTrash />}
          onClick={() => handleDelete(id)}
        >
          Hapus
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ListExpense;

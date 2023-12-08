import React, { useState } from "react";

import {
  Heading,
  Box,
  Input,
  Text,
  Select,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";

import Layout from "../layout";

const ExpensePage = () => {
  const [title, setTitle] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [kategori, setKategori] = useState("");
  const [keterangan, setKeterangan] = useState("");

  return (
    <Layout>
      <Box my={5}>
        <Heading>Tambah Pengeluaran</Heading>
        <Text>Isi bidang dibawah ini</Text>
      </Box>

      <form>
        <Box rounded="md" boxShadow="md" p={5} my={4}>
          <Input
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Jumlah"
            type="number"
            mb={4}
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
          />
          <Input
            placeholder="Tanggal"
            type="date"
            mb={4}
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
          <Select
            placeholder="Select option"
            mb={4}
            defaultValue={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Textarea
            placeholder="Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </Box>
        <Flex direction="row-reverse">
          <Box>
            <Button colorScheme="teal">Simpan</Button>
          </Box>
        </Flex>
      </form>
    </Layout>
  );
};

export default ExpensePage;

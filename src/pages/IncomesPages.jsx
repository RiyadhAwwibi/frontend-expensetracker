import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

import { useGlobalContext } from "../context/GlobalContext";
import Layout from "../layout";

const IncomesPages = () => {
  const [title, setTitle] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [kategori, setKategori] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { getSigleIncomes, editIncomes, isLoading, incomes, addIncomes } =
    useGlobalContext();

  useEffect(() => {
    if (id) {
      getSigleIncomes(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setTitle(incomes.title);
    setJumlah(incomes.amount);
    setTanggal(incomes.date);
    setKategori(incomes.category);
    setKeterangan(incomes.description);
  }, [incomes, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editIncomes({
        id: id,
        title: title,
        amount: jumlah,
        category: kategori,
        description: keterangan,
        date: tanggal,
      });
      navigate("/");
    } else {
      addIncomes({
        title: title,
        amount: jumlah,
        category: kategori,
        description: keterangan,
        date: tanggal,
      });
      navigate("/");
    }
  };

  return (
    <Layout>
      <Box my={5}>
        <Heading>{id ? "Update" : "Tambah"} Pemasukan</Heading>
        <Text>Isi bidang dibawah ini</Text>
      </Box>
      <form onSubmit={handleSubmit}>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Box rounded="md" boxShadow="md" p={5} my={4}>
            <Input
              placeholder="Judul"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
              mb={4}
            />
            <Input
              placeholder="Jumlah"
              type="number"
              mb={4}
              value={jumlah || ""}
              onChange={(e) => setJumlah(e.target.value)}
            />
            <Input
              placeholder="Tanggal"
              type="date"
              mb={4}
              value={tanggal || ""}
              onChange={(e) => setTanggal(e.target.value)}
            />
            <Select
              placeholder="Select option"
              mb={4}
              value={kategori || ""}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="bank">Deposito</option>
              <option value="stocks">Dividen</option>
              <option value="salary">Gaji</option>
              <option value="gift">Hibah</option>
              <option value="investments">Investasi</option>
              <option value="other">Lain-lain</option>
              <option value="refund">Pengembalian Dana</option>
              <option value="award">Penghargaan</option>
              <option value="sale">Penjualan</option>
              <option value="rental">Penyewaan</option>
              <option value="saving">Tabungan</option>
            </Select>
            <Textarea
              placeholder="Keterangan"
              value={keterangan || ""}
              onChange={(e) => setKeterangan(e.target.value)}
            />
          </Box>
        )}
        <Flex direction="row-reverse">
          <Box>
            <Button colorScheme="teal" type="submit" isDisabled={isLoading}>
              {id ? "Ubah" : "Simpan"}
            </Button>
          </Box>
        </Flex>
      </form>
    </Layout>
  );
};

export default IncomesPages;

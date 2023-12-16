import React, { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // incomes

  const getAllIncomes = async (date) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`, {
        params: { date },
      });

      setIncomes(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getSigleIncomes = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}get-incomes/${id}`);

      setIncomes({
        ...response.data,
        date: new Date(response.data.date).toISOString().split("T")[0],
      });
      setIsLoading(false);
      console.log({
        ...response.data,
        date: new Date(response.data.date).toISOString().split("T")[0],
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const editIncomes = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `${BASE_URL}update-income/${data.id}`,
        {
          title: data.title,
          amount: data.amount,
          category: data.category,
          description: data.description,
          date: data.date,
        }
      );

      console.log(response.data);
      await getAllIncomes();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const addIncomes = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}add-income`, {
        title: data.title,
        amount: data.amount,
        category: data.category,
        description: data.description,
        date: data.date,
      });

      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deleteIncomes = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}delete-income/${id}`);

      getAllIncomes();
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // expense

  const getAllExpense = async (date) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`, {
        params: { date },
      });

      setExpenses(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getSigleExpense = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}get-expenses/${id}`);

      setExpenses({
        ...response.data,
        date: new Date(response.data.date).toISOString().split("T")[0],
      });
      setIsLoading(false);
      console.log({
        ...response.data,
        date: new Date(response.data.date).toISOString().split("T")[0],
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const editExpense = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `${BASE_URL}update-expense/${data.id}`,
        {
          title: data.title,
          amount: data.amount,
          category: data.category,
          description: data.description,
          date: data.date,
        }
      );

      console.log(response.data);
      await getAllExpense();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const addExpense = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}add-expense`, {
        title: data.title,
        amount: data.amount,
        category: data.category,
        description: data.description,
        date: data.date,
      });

      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deleteExpense = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);

      getAllExpense();
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  console.log(expenses);
  return (
    <GlobalContext.Provider
      value={{
        //icomes
        getAllIncomes,
        getSigleIncomes,
        editIncomes,
        addIncomes,
        deleteIncomes,
        //expense
        getAllExpense,
        getSigleExpense,
        editExpense,
        addExpense,
        deleteExpense,
        incomes,
        setIncomes,
        expenses,
        setExpenses,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

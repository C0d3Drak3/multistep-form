"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../components/useLocalStorage";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("MultiForm");
  const [form, setForm] = useState([]);

  useEffect(() => {
    const savedForm = getItem();
    if (savedForm) {
      setForm(savedForm);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setItem(form);
    }
  }, [form, setItem]);

  //Crear aqui la logica para insertar el contenido del form en el local storage y que siempre sobreescriba

  const addToForm = (value) => {
    setForm(["uwu"]);
  };

  const deleteForm = (productId) => {
    setForm([]);
    console.log("Deleted Form after Submit");
  };

  return (
    <FormContext.Provider value={{ form, addToForm, deleteForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

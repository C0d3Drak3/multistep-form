"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../components/useLocalStorage";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("MultiForm");

  // Estado inicial del formulario
  //billing=1 es mensual, el estado inicial. Billing=2 es anual
  const initialState = {
    step: 1,
    name: "",
    email: "",
    phoneNumber: "",
    billing: 1,
    planType: 0,
    addOns: [],
  };

  const [form, setForm] = useState(initialState);

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

  const addToForm = (updatedFields, newStep) => {
    setForm((prevForm) => ({
      ...prevForm,
      ...updatedFields,
      step: newStep,
    }));
  };

  const deleteForm = () => {
    setForm(initialState);
    console.log("Deleted Form after Submit");
  };

  return (
    <FormContext.Provider value={{ form, addToForm, deleteForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

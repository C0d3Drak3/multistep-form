"use client";

export const useLocalStorage = (key) => {
  const setItem = (value) => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getItem = () => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      } catch (error) {
        console.log(error);
      }
    }
    return undefined;
  };

  const removeItem = () => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { setItem, getItem, removeItem };
};

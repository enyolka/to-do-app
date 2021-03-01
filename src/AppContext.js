import { createContext } from "react";

const date = new Date().toISOString().slice(0, 10);

export const defaultObject = {
  text: "",
  isImportant: false,
  date: date,
  toggleImportanceState: () => {},
};

export const AppContext = createContext(defaultObject);

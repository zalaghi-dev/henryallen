import React, { createContext, useState } from "react";
import langs from "./langs.json";
export const langContext = createContext();
export default function Lang({ children }) {
  const [changeLang, setChangeLang] = useState("en");
  return (
    <langContext.Provider
      value={{ changeLang, setChangeLang, langs: langs[changeLang] }}
    >
      {children}
    </langContext.Provider>
  );
}

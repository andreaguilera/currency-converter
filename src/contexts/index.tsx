import React from "react";
import { CurrenciesProvider } from "./currencies";
const Contexts: React.FC = ({ children }) => {
  return <CurrenciesProvider>{children}</CurrenciesProvider>;
};

export default Contexts;

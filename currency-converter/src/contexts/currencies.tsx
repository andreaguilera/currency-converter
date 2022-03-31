import React, { createContext, useContext, useState } from "react";
import { getCurrencies } from "../services/api";

interface CurrencyContextData {
  currencies: string[];
  loadCurrencies(): void;
}

const CurrenciesContext = createContext<CurrencyContextData>(
  {} as CurrencyContextData
);

export const CurrenciesProvider: React.FC = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);

  const loadCurrencies = async () => {
    console.log("loadCurrencies");
  };

  return (
    <CurrenciesContext.Provider
      value={{
        currencies,
        loadCurrencies,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};

export const useCurrencies = (): CurrencyContextData => {
  const context = useContext(CurrenciesContext);
  if (!context) {
    throw new Error("useCurrencies must be used within an CurrenciesProvider.");
  }

  return context;
};

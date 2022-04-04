import React, { createContext, useContext, useState } from "react";
import { getCurrencies } from "../services/api";

interface CurrencyContextData {
  currencies: string[];
  loadCurrencies(): any;
  convert(): any;
}

const CurrenciesContext = createContext<CurrencyContextData>(
  {} as CurrencyContextData
);

export const CurrenciesProvider: React.FC = ({ children }) => {
  const [currencies, setCurrencies] = useState<string[]>([]);

  const loadCurrencies = async () => {
    await getCurrencies().then((response) => {
      Object.keys(response).map((key) => {
        setCurrencies((currencies) => [...currencies, key]);
      });
    });
  };

  const convert = async () => {
    await console.log("convert");
  };

  return (
    <CurrenciesContext.Provider
      value={{
        currencies,
        loadCurrencies,
        convert,
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

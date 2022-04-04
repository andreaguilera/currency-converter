import React, { createContext, useContext } from "react";

interface CurrencyContextData {
  convert(): any;
}

const CurrenciesContext = createContext<CurrencyContextData>(
  {} as CurrencyContextData
);

export const CurrenciesProvider: React.FC = ({ children }) => {
  const convert = async () => {
    await console.log("convert");
  };

  return (
    <CurrenciesContext.Provider
      value={{
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

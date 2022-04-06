import React, { createContext, useContext, useState } from "react";
import { getConversion } from "../services/api";

interface CurrencyContextData {
  convert(from: string, to: string, amount: string): Promise<any>;
  setFrom: any;
  setTo: any;
  setAmount: any;
  result: any;
  amount: string;
  from: string;
  to: string;
}

const CurrenciesContext = createContext<CurrencyContextData>(
  {} as CurrencyContextData
);

export const CurrenciesProvider: React.FC = ({ children }) => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState(null);

  const convert = async () => {
    const response = await getConversion(from, to, amount);
    setResult(response);
  };

  return (
    <CurrenciesContext.Provider
      value={{
        convert,
        setFrom,
        setTo,
        setAmount,
        result,
        amount,
        from,
        to,
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

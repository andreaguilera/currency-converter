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
  const [from, setFrom] = useState<string>("Select");
  const [to, setTo] = useState<string>("Select");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState("");

  const convert = async () => {
    if (from === "" || to === "" || amount === "") {
      alert("Preencha todos os campos");
      return;
    }
    const response = await getConversion(from, to, amount);
    setResult(response.toFixed(3));
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

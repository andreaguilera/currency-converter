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
  lastUpdate: string;
}

const CurrenciesContext = createContext<CurrencyContextData>(
  {} as CurrencyContextData
);

export const CurrenciesProvider: React.FC = ({ children }) => {
  const [from, setFrom] = useState<string>("Select");
  const [to, setTo] = useState<string>("Select");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState("");
  const [lastUpdate, setLastUpdate] = useState<string>("");

  const convert = async () => {
    if (from === "" || to === "") {
      alert("Preencha todos os campos");
      return;
    }
    const response = await getConversion(from, to, amount);
    setResult(response.conversion_result);
    setLastUpdate(response.time_last_update_utc.substring(5, 16));
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
        lastUpdate,
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

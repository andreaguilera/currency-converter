import { Input } from "antd";
import { useEffect } from "react";
import { useCurrencies } from "../../contexts/currencies";
import "./style.scss";

export const StyledInput: React.FC = () => {
  const { setAmount, convert, amount, from, to } = useCurrencies();

  useEffect(() => {
    convert(from, to, amount);
  }, [amount]);

  function handleChange(value: string) {
    setAmount(value);
  }

  return (
    <Input
      className="input"
      value={amount}
      size="large"
      accept="number"
      placeholder="Digite um valor"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

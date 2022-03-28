import { Input } from "antd";
import "./style.scss";

const { Search } = Input;

export const StyledInput: React.FC = () => {
  return <Input className="input" size="large" placeholder="Digite um valor" />;
};

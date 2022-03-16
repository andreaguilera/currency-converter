import "./style.scss";

type ISelect = {
  name: string;
};

export const Select = (Props: ISelect) => {
  return (
    <select name={Props.name}>
      <option value="">Selecione</option>
    </select>
  );
};

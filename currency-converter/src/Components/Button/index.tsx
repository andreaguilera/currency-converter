import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Button } from "antd";
import "./style.scss";

export const ConvertButton = (props: any) => {
  return (
    <Button
      type="primary"
      icon={<FaRegMoneyBillAlt />}
      shape="default"
      size="large"
      {...props}
    >
      Converter
    </Button>
  );
};

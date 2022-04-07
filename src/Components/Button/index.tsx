import { Button } from "antd";
import { DollarCircleFilled } from "@ant-design/icons";
import "./style.scss";

export const ConvertButton = (props: any) => {
  return (
    <Button
      className="button"
      type="primary"
      icon={<DollarCircleFilled />}
      shape="default"
      size="large"
      {...props}
    >
      Converter
    </Button>
  );
};

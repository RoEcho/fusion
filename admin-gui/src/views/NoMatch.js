import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

function Monitor() {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary">Next</Button>}
    />
  );
}

export default Monitor;

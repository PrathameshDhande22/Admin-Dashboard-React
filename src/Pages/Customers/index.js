import { Space, Typography } from "antd";
import { CustomerTable } from "../../Components/CustomerTable";

export const Customers = () => {
  return (
    <div className="customers">
      <Space direction="vertical" wrap={true}>
        <Typography.Title level={3}>Customers</Typography.Title>
        <CustomerTable />
      </Space>
    </div>
  );
};

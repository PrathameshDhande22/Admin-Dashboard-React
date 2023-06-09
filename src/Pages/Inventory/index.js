import { Space, Typography } from "antd";
import { InventoryTable } from "../../Components/InventoryTable";

export const Inventory = () => {
  return (
    <div className="Inventory">
      <Space direction="vertical" wrap={true}>
        <Typography.Title level={3}>Inventory</Typography.Title>
        <InventoryTable />
      </Space>
    </div>
  );
};

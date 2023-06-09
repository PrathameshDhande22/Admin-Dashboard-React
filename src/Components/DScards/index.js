import { DSCard } from "../DSCard";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrder } from "../../Data";

export const DSCards = () => {
  const [orderData, setorderData] = useState(0);
  const [inventoryData, setinventoryData] = useState(0);
  const [customerData, setcustomerData] = useState(0);
  const [revenueData, setrevenueData] = useState(0);

  useEffect(() => {
    getOrder().then((res) => {
      setorderData(res.total);
      setrevenueData(res.discountedTotal);
    });

    getCustomers().then((res) => setcustomerData(res.total));

    getInventory().then((res) => setinventoryData(res.total));
  }, []);

  const style = {
    fontSize: 22,
    color: "green",
    backgroundColor: "#bef5a9",
    borderRadius: 20,
    padding: 8,
  };
  return (
    <div className="dscards">
      <Space direction="horizontal" wrap={true}>
        <DSCard
          icon={<ShoppingCartOutlined style={style} />}
          title={"Orders"}
          number={orderData}
        />
        <DSCard
          icon={
            <ShoppingOutlined
              style={{ ...style, backgroundColor: "#ffd4d4", color: "red" }}
            />
          }
          title={"Inventory"}
          number={inventoryData}
        />
        <DSCard
          icon={
            <UserOutlined
              style={{ ...style, color: "blue", backgroundColor: "#d4eeff" }}
            />
          }
          title={"Customers"}
          number={customerData}
        />
        <DSCard
          icon={
            <DollarCircleOutlined
              style={{ ...style, color: "purple", backgroundColor: "#f2deff" }}
            />
          }
          title={"Revenue"}
          number={revenueData}
        />
      </Space>
    </div>
  );
};

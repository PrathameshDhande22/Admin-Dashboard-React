import { Card, Space, Typography } from "antd";
import { DSCards } from "../../Components/DScards";
import RecentOrder from "../../Components/RecentOrder";
import Chart from "../../Components/Chart";

export const DashBoard = () => {
  return (
    <div className="dashboard">
      <Space direction="vertical" size={"small"} wrap={true} key={"12"}>
        <Typography.Title level={3}>DashBoard</Typography.Title>
        <DSCards />
        <Space direction="horizontal" wrap={true} key={"23"}>
          <RecentOrder />
          <Card>
            <Chart />
          </Card>
        </Space>
      </Space>
    </div>
  );
};

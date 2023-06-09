import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrder } from "../../Data";

const RecentOrder = () => {
  const [isLoading, setisLoading] = useState(false);
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    setisLoading(true);
    getOrder().then((res) => {
      setDataSource(res.products);
      setisLoading(false);
    });
  }, []);

  return (
    <div className="recentorder">
      <Typography.Title level={5}>Recent Order</Typography.Title>
      <Table
        columns={[
          { title: "Title", dataIndex: "title", key: 1 },
          { title: "Quantity", dataIndex: "quantity", key: 2, align: "center" },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            key: 3,
            align: "center",
          },
        ]}
        loading={isLoading}
        dataSource={dataSource}
        pagination={false}
        bordered={true}
      ></Table>
    </div>
  );
};

export default RecentOrder;

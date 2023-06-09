import { Space, Table, Typography } from "antd";
import { useState, useEffect } from "react";
import { getOrder } from "../../Data";

export const Orders = () => {
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
    <div className="orders">
      <Space direction="vertical" wrap={true}>
        <Typography.Title level={3}>Orders</Typography.Title>
        <Table
          columns={[
            { title: "Title", dataIndex: "title", key: 1 },
            {
              title: "Price",
              dataIndex: "price",
              key: 4,
              align: "center",
              render: (value) => {
                return "$" + value;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              key: 2,
              align: "center",
            },
            {
              title: "Discounted Price",
              dataIndex: "discountedPrice",
              key: 3,
              align: "center",
              render: (value) => {
                return "$" + value;
              },
            },
            { title: "Total", dataIndex: "total", key: 5, align: "center" },
          ]}
          loading={isLoading}
          dataSource={dataSource}
          pagination={false}
          bordered={true}
        />
      </Space>
    </div>
  );
};

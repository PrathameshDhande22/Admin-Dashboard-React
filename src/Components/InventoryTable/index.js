import { useEffect, useState } from "react";
import { getInventory } from "../../Data";
import { Avatar, Rate, Table } from "antd";

export const InventoryTable = () => {
  const [dataSource, setdataSource] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getInventory().then((res) => {
      setdataSource(res.products);
      setisLoading(false);
    });
  }, []);

  return (
    <>
      <Table
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (value) => {
              return <Avatar src={value} />;
            },
            align: "center",
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => {
              return "$" + value;
            },
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (value) => {
              return (
                <Rate
                  value={value}
                  disabled
                  allowHalf
                  tooltips={["Poor", "Weak", "Good", "Very Good", "Excellent"]}
                />
              );
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
            align: "center",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        loading={isLoading}
        dataSource={dataSource}
        pagination={{
          position: ["bottomLeft"],
          pageSize: 5,
          showTotal: (value) => {
            return <span>Total {value} Items</span>;
          },
        }}
        bordered
      />
    </>
  );
};

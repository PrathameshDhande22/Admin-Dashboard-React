import { Avatar, Table } from "antd";
import { useState, useEffect } from "react";
import { getCustomers } from "../../Data";

export const CustomerTable = () => {
  const [isLoading, setisLoading] = useState(false);
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    setisLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setisLoading(false);
    });
  }, []);
  return (
    <>
      <Table
        columns={[
          {
            title: "Image",
            dataIndex: "image",
            render: (value) => {
              return <Avatar src={value} />;
            },
            align: "center",
          },
          {
            title: "First Name",
            dataIndex: "firstName",
            defaultSortOrder: "ascend",
            filterDropdownOpen: true,
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Age",
            dataIndex: "age",
            align: "center",
          },
          {
            title: "Gender",
            dataIndex: "gender",
            render: (gender) => {
              return gender[0].toUpperCase() + gender.slice(1);
            },
            align: "center",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone No.",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (value) => {
              return value.address + ", " + value.city;
            },
          },
        ]}
        loading={isLoading}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: 5,
          position: ["bottomLeft"],
          showTotal: (total) => {
            return <b>Total {total} Customers</b>;
          },
        }}
        bordered={true}
      />
    </>
  );
};

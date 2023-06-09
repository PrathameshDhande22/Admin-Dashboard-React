import { Badge, Drawer, List, Tag, Typography } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrder } from "../../Data";

export const Notification = () => {
  const [data, setData] = useState([]);
  const [openNoti, setopenNoti] = useState(false);

  useEffect(() => {
    getOrder().then((res) => setData(res.products));
  }, []);

  return (
    <div className="notification">
      <Badge count={data.length} title="Notifications">
        <BellOutlined
          style={{ fontSize: 24 }}
          onClick={() => setopenNoti(true)}
        />
      </Badge>
      <Drawer
        title="Notifications"
        open={openNoti}
        onClose={() => setopenNoti(false)}
        width={300}
      >
        <List
          bordered={true}
          dataSource={data}
          renderItem={(item) => {
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Tag color="red">New</Tag>}
                  title={
                    <>
                      <Typography.Text strong>{item.title}</Typography.Text> Has
                      Been Ordered !
                    </>
                  }
                />
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
};

import { Badge, Drawer, List } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComment } from "../../Data";

export const Mail = () => {
  const [data, setData] = useState([]);
  const [openNoti, setopenNoti] = useState(false);

  useEffect(() => {
    getComment().then((res) => setData(res.comments));
  }, []);

  return (
    <div className="mails">
      <Badge count={data.length} title="Mails" dot>
        <MailOutlined
          style={{ fontSize: 24 }}
          onClick={() => setopenNoti(true)}
        />
      </Badge>
      <Drawer
        title="Mails"
        open={openNoti}
        onClose={() => setopenNoti(false)}
        width={300}
      >
        <List
          dataSource={data}
          renderItem={(item) => {
            return (
              <>
                <List.Item>{item.body}</List.Item>
              </>
            );
          }}
        />
      </Drawer>
    </div>
  );
};

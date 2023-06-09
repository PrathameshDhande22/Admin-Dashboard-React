import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="sidemenu">
      <Menu
        mode="vertical"
        className="menuvertical"
        onClick={(e) => {
          navigate(e.key);
        }}
        defaultSelectedKeys={["/"]}
        items={[
          {
            icon: <AppstoreOutlined />,
            key: "/",
            label: "DashBoard",
          },
          {
            icon: <ShopOutlined />,
            key: "/inventory",
            label: "Inventory",
          },
          {
            icon: <ShoppingOutlined />,
            key: "/orders",
            label: "Orders",
          },
          {
            icon: <UserOutlined />,
            key: "/customers",
            label: "Customers",
          },
        ]}
      />
    </div>
  );
};

export default SideMenu;

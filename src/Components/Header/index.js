import "./index.css";
import { Avatar, Space, Typography } from "antd";
import { HamburgerMenu } from "../HamburgerMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../State/Reducer";
import { Notification } from "../Notification";
import { Mail } from "../Mail";

export const Header = () => {
  const showmenus = useSelector((state) => state.showSideMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    function showmenu() {
      if (window.innerWidth < 700) {
        dispatch(hide());
      }
    }
    showmenu();
  });

  return (
    <div className="header">
      <Space>
        {showmenus ? null : <HamburgerMenu />}
        <Avatar
          src="https://static.vecteezy.com/system/resources/thumbnails/004/674/174/small/pd-logo-design-abstract-letter-pd-logo-modern-and-creative-logo-design-illustration-vector.jpg"
          draggable={false}
          size={40}
          alt="Admin Profile Icon"
        />
      </Space>
      <Typography.Title level={3} style={{ paddingTop: 10 }}>
        Admin's DashBoard
      </Typography.Title>
      <Space>
        <Mail />
        <Notification />
      </Space>
    </div>
  );
};

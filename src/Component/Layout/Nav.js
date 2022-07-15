import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
const Nav = () => {
  return (
    <div>
      <div className="header d-flex justify-content-center">
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">Giới Thiệu</Menu.Item>
          <Menu.Item key="3">Tin tức - Sự kiện</Menu.Item>
          <Menu.Item key="4">Hỏi Đáp</Menu.Item>
          <Menu.Item key="5">Liên Hệ</Menu.Item>
        </Menu>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Nav;

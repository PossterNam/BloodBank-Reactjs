import React from "react";
import { Menu, Layout } from "antd";
import { AreaChartOutlined, UnorderedListOutlined, ContainerOutlined } from "@ant-design/icons";
import { faCircleUser, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../logo.svg";
import { NavLink, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Siderbar = (props) => {
  return (
    <Sider
      style={{
        width: 256,
      }}
      collapsed={props.isCollapse}
      theme="light"
    >
      <div className="logo text-center" style={{ height: props.isCollapse ? 50 : 100 }}>
        <img src={logo} height={props.isCollapse ? 50 : 100} />
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["/dashboard"]}
        mode="inline"
        theme="light"
        id="sidebar"
      >
        <Menu.Item key="dashboard">
          <NavLink className={'text-decoration-none'} to="/">
            <AreaChartOutlined />
            <span>Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="category">
          <NavLink className={'text-decoration-none'} to="/BloodGroup">
            <UnorderedListOutlined />
            <span>Nhóm máu</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="product">
          <NavLink className={'text-decoration-none'} to="/product/list">
            <ContainerOutlined />
            <span>Bài viết</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="order">
          <NavLink className={'text-decoration-none'} to="/order/list">
            <span className="anticon">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </span>
            <span>Thông tin liên hệ </span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="account">
          <NavLink className={'text-decoration-none'} to="/account/list">
            <span className="anticon">
              <FontAwesomeIcon icon={faCircleUser} />
            </span>
            <span>Quản lý người dùng</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Siderbar;

import { Menu, Dropdown } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, BellOutlined } from "@ant-design/icons";

import "./HeaderToolbar.less";

function HeaderToolbar() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <UserOutlined />
        <span className="toolbar-dropdown-item-text">个人中心</span>
      </Menu.Item>
      <Menu.Item key="1">
        <SettingOutlined />
        <span className="toolbar-dropdown-item-text">个人设置</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <LogoutOutlined />
        <span className="toolbar-dropdown-item-text">退出登录</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="fusion-layout-header-toolbar">
      <div className="toolbar-item">
        <BellOutlined />
      </div>
      <div className="toolbar-item">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div onClick={(e) => e.preventDefault()} style={{ height: "50px" }}>
            Admin
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderToolbar;

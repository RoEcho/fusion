import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SiderMenu from "../components/navigation/SiderMenu";
import HeaderToolbar from "../components/navigation/HeaderToolbar";

import "./Navigation.less";

const { Header, Content, Footer, Sider } = Layout;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="fusion-layout">
      <Header className="fusion-layout-header">
        <div className="fusion-layout-header-logo">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
          />
          <span>Fusion Pro</span>
        </div>
        <HeaderToolbar />
      </Header>
      <Layout>
        <Sider
          className="fusion-layout-sider"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <SiderMenu />
        </Sider>
        <Layout>
          <Content className="fusion-layout-content">
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <Outlet />
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Navigation;

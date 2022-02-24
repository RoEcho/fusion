import { Menu } from "antd";
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { SubMenu } = Menu;

function SiderMenu() {
  let navigate = useNavigate();
  const menuOnSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    // console.log("onSelect:", item, key, keyPath, selectedKeys, domEvent);
    navigate("/" + key);
  }

  return (
    <>
      <Menu style={{borderRight: "0px"}} theme="light" defaultSelectedKeys={["1"]} mode="inline" onSelect={menuOnSelect}>
        <SubMenu key="dashboard" icon={<DashboardOutlined />} title="Dashboard">
          <Menu.Item key="analysis">分析页</Menu.Item>
          <Menu.Item key="monitor">监控页</Menu.Item>
          <Menu.Item key="workplace">工作台</Menu.Item>
        </SubMenu>
        <Menu.Item key="shop-manage" icon={<FormOutlined />}>
          店铺管理
        </Menu.Item>
        <Menu.Item key="class-manage" icon={<FormOutlined />}>
          分类管理
        </Menu.Item>
        <Menu.Item key="goods-manage" icon={<TableOutlined />}>
          商品管理
        </Menu.Item>
        <Menu.Item key="store-manage" icon={<TableOutlined />}>
          库存管理
        </Menu.Item>
        <Menu.Item key="order-manage" icon={<ProfileOutlined />}>
          订单管理
        </Menu.Item>
        <Menu.Item key="user-manage" icon={<UserOutlined />}>
          用户管理
        </Menu.Item>
        <SubMenu key="account" icon={<UserOutlined />} title="个人页">
          <Menu.Item key="center">个人中心</Menu.Item>
          <Menu.Item key="settins">个人设置</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default SiderMenu;

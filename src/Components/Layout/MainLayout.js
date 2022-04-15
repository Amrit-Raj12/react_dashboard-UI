import React from "react";
import { Layout, Menu, Avatar, Badge, Input, Typography } from "antd";
import "./MainLayout.css";
import {
  BellOutlined,
  SearchOutlined,
  HomeOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
  ApiOutlined,
  SettingOutlined,
  BugOutlined,
} from "@ant-design/icons";
import Sales from "../Pages/Sales";
import { Switch, Route, Link } from "react-router-dom";
import ListTemp from "../Pages/List";
import AddCustomer from "../Pages/Sales/Customer/AddCustomer";
import EditCustomer from "../Pages/Sales/Customer/EditCustomer";
import Cases from "../Cases/Cases";
import Home from "../Pages/Home";
import Dash from "../../dash.png"

const { Title, Text } = Typography;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function MainLayout() {
  return (
    <div className="mainLayoutContainer">
      <Layout style={{ height: "720px" }}>
        <Header className="header">
          <img
            className="logo"
            src={Dash}
            alt="logo"
            width={80}
            height={20}
          />

          <Input
            placeholder="search everywhere..."
            className="searchBox"
            prefix={<SearchOutlined />}
          />

          <div className="menuBox">
            <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
              <div className="menuItem">
                <Menu.Item key="1">
                  <div className="notificationBox">
                    <Badge
                      count={5}
                      style={{ backgroundColor: "blue", fontSize: "18px" }}
                    >
                      <BellOutlined
                        style={{ fontSize: "28px", color: "#000" }}
                      />
                    </Badge>
                  </div>
                </Menu.Item>
              </div>

              <div className="menuItem">
                <Menu.Item key="2">
                  <div className="profileBox">
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                  </div>
                </Menu.Item>
              </div>
            </Menu>
          </div>
        </Header>
        <Layout>
          <Sider
            className="site-layout-background"
            style={{ backgroundColor: "red" }}
            breakpoint="sm"
            collapsedWidth="0"
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link exact to="/">
                  Dashboard
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<ShoppingCartOutlined />}
                title="Eccomerce"
              >
                <Menu.Item key="2">
                  <Link exact to="/sales">
                    My Sales
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link exact to="/list">
                    Catalogs
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link exact to="/case">
                    <BugOutlined /> Cases
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">Marketing</Menu.Item>
                <Menu.Item key="6">Tools</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<ContainerOutlined />}
                title="Page Builder"
              >
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
              </SubMenu>

              <Menu.Item key="9" icon={<ApiOutlined />}>
                App
              </Menu.Item>
              <Menu.Item key="10" icon={<SettingOutlined />}>
                Setting
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "10px 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Title level={4}>My Dashboard</Title>
            <Text type="secondary">
              This is the Demo Dashboard which contains Covid Cases Tracker and
              also Customer Crud operations.
            </Text>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sales" component={Sales} />
                <Route exact path="/list" component={ListTemp} />
                <Route exact path="/add" component={AddCustomer} />
                <Route exact path="/edit/:id" component={EditCustomer} />
                {/* Cases Routing */}
                <Route exact path="/case" component={Cases} />
              </Switch>
              {/* <Sales /> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;

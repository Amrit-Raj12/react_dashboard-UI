import React from "react";
import "./Sales.css";
import { Typography, Tabs, Input, Tag, Select } from "antd";
import {} from "@ant-design/icons";
import Order from "./Sales/Order";
import AbandonedCart from "./Sales/AbandonedCart";
import Customer from "./Sales/Customer/Customer";

const { Title, Text, Link } = Typography;
const { Search } = Input;
const { TabPane } = Tabs;

const { Option } = Select;

function log(e) {
  console.log(e);
}

// const options = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <a href="https://www.antgroup.com">1st menu item</a>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <a href="https://www.aliyun.com">2nd menu item</a>
//     </Menu.Item>
//     <Menu.Divider />
//     <Menu.Item key="3">3rd menu item</Menu.Item>
//   </Menu>
// );

const Sales = () => {
  return (
    <div className="salesBox">
      <div className="titleBox">
        <Title level={5}>My Sales</Title>
      </div>
      <div className="tabsBox">
        <Tabs defaultActiveKey="1">
          <TabPane className="tabTxt" tab="Order" key="1">
            {/* <div className="tagBox">
              <Tag color="#5285FC" closable onClose={log}>
                Country-Australia
              </Tag>
              <Tag color="#5285FC" closable onClose={log}>
                Country-USA
              </Tag>
              <Tag color="#5285FC" closable onClose={log}>
                Country-Japan
              </Tag>
              <Tag color="#5285FC" closable onClose={log}>
                Country-India
              </Tag>

              <Tag color="#5285FC" closable onClose={log}>
                Country-New Zealand
              </Tag>
              <Tag color="#5285FC" closable onClose={log}>
                Name-John
              </Tag>
            </div> */}
            <div className="orderContent">
              <Customer />
              {/* <Order /> */}
            </div>
          </TabPane>
          <TabPane className="tabTxt" tab="Abandoned Carts" key="2">
            Abandoned Carts
            <AbandonedCart />
          </TabPane>
          <TabPane className="tabTxt" tab="Customers" key="3">
            <Customer />
          </TabPane>
          <TabPane className="tabTxt" tab="Subscribtion" key="4">
            Subscribtion
          </TabPane>
          <TabPane className="tabTxt" tab="Disputes" key="5">
            Disputes
          </TabPane>
        </Tabs>

        <div className="tabRightComponents">
          {/* <div className="filterBox">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Filters <DownOutlined />
              </a>
            </Dropdown>
          </div> */}
          {/* ------- */}
          {/* <div className="searchOrderBox">
            <Input.Group compact>
              <Select defaultValue="Filter" style={{ width: "30%" }}>
                <Option value="Sign Up">Sign Up</Option>
                <Option value="Sign In">Sign In</Option>
              </Select> */}
          {/* <Input placeholder="search orders" postfix={<SearchOutlined/>} style={{ width: '70%' }}/> */}
          {/* <Search placeholder="search orders" style={{ width: "70%" }} /> */}
          {/* <AutoComplete
        style={{ width: '70%' }}
        placeholder="search orders"
        options={[{ value: 'text 1' }, { value: 'text 2' }]}
      /> */}
          {/* </Input.Group> */}
          {/* <Input
            placeholder="search everywhere..."
            className="searchOrder"
            prefix={<SearchOutlined />}
          /> */}
          {/* </div> */}
          {/* ------ */}
        </div>
      </div>
    </div>
  );
};

export default Sales;

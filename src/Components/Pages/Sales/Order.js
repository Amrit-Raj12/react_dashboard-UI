import React from "react";
import { Tabs } from "antd";
import CustomSearchFilter from "../../CustomSearch/CustomSearchFilter";

const { TabPane } = Tabs;

const Order = () => {
  return (
    <>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Order" key="1">
            Order
          </TabPane>
          <TabPane tab="Abandoned Carts" key="2">
            Abandoned Carts
          </TabPane>
          <TabPane tab="Customers" key="3">
            Customers
          </TabPane>
          <TabPane tab="Subscribtion" key="4">
            Subscribtion
          </TabPane>
          <TabPane tab="Disputes" key="5">
            Disputes
          </TabPane>
        </Tabs>
      </div>
      <div>
        <CustomSearchFilter />
      </div>
    </>
  );
};

export default Order;

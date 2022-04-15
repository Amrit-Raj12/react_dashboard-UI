import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  InputNumber,
} from "antd";
import "./AddCustomer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

const style = { background: "#0092ff", padding: "8px 0" };

// Form
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  // number: {
  //   range: "${label} is not a valid number!",
  // },
};

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const customers = useSelector((state) => state);

  const dispatch = useDispatch();

  // Form

  const handleSubmit = (e) => {
    // e.preventDefault();

    const checkEmail = customers.find(
      (customer) => customer.email === email && email
    );

    const checkPhone = customers.find(
      (customer) => customer.phone === phone && phone
    );

    const checkName = customers.find(
      (customer) => customer.name === name && name
    );

    if (!name || !email || !phone) {
      return toast.warning("Please fill all required fileds");
    }

    if (checkEmail) {
      return toast.error("This email is already exists!");
    }

    if (checkPhone) {
      return toast.error("This phone is already exists!");
    }

    if (checkName) {
      return toast.error("This name is already exists!");
    }

    const data = {
      id: customers[customers.length - 1].id + 1,
      // id: Math.random(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CUSTOMER", payload: data });
    toast.success("Customer added sucessfully!!");
    history.push("/sales");
  };

  const onFinish = (e) => {
    console.log(e);
    handleSubmit();
  };

  return (
    <div className="addCustomerContainer">
      <Row>
        <Col span={24} style={{ backgroundColor: "#fff" }}>
          <div className="table_header">
            <Title level={4}>Add Customer Form</Title>
          </div>
          <div className="back_button">
            <Link exact to="/sales">
              <Button type="default" shape="round" icon={<ArrowLeftOutlined />}>
                Back
              </Button>
            </Link>
          </div>
          <Row justify="left">
            <Col span={22}>
              {/* <Form
                name="basic"
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                style={{ padding: "40px" }}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                  wrapperCol={{ span: 16 }}
                >
                  <label>
                    Name<sup style={{ color: "red" }}>*</sup>
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  wrapperCol={{ span: 16 }}
                >
                  <label>
                    Email<sup style={{ color: "red" }}>*</sup>
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone!" },
                  ]}
                  wrapperCol={{ span: 16 }}
                >
                  <label>
                    Phone<sup style={{ color: "red" }}>*</sup>
                  </label>
                  <Input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 8 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form> */}

              <Form
                {...layout}
                name="nest-messages"
                onFinish={(e) => handleSubmit(e)}
                validateMessages={validateMessages}
                wrapperCol={{ span: 12 }}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  onChange={(e) => setName(e.target.value)}
                  wrapperCol={{ span: 12 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                    },
                  ]}
                  wrapperCol={{ span: 12 }}
                  onChange={(e) => setEmail(e.target.value)}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "number"]}
                  label="Phone"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  onChange={(e) => setPhone(e.target.value)}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>

        {/* Full Column in two parts */}
        {/* <Col span={24} style={{ backgroundColor: "#fff" }}>
          <Row gutter={16}>
            <Col
              span={12}
              className="gutter-row"
              style={{ backgroundColor: "#F0F2F5" }}
            >
              <div style={style}>col-12</div>
            </Col>
            <Col
              span={12}
              className="gutter-row"
              style={{ backgroundColor: "#F0F2F5" }}
            >
              <div style={style}>col-12</div>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </div>
  );
};

export default AddCustomer;

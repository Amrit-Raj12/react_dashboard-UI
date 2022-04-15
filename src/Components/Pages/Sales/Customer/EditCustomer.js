import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import "./AddCustomer.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

const style = { background: "#0092ff", padding: "8px 0" };
const EditCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { id } = useParams();

  const customers = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();

  const currentCustomer = customers.find(
    (customer) => customer.id === parseInt(id)
  );

  useEffect(() => {
    if (currentCustomer) {
      setName(currentCustomer.name);
      setPhone(currentCustomer.phone);
      setEmail(currentCustomer.email);
    }
  }, [currentCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = customers.find(
      (customer) => customer.id !== parseInt(id) && customer.email === email
    );

    const checkPhone = customers.find(
      (customer) => customer.id !== parseInt(id) && customer.phone === phone
    );

    const checkName = customers.find(
      (customer) => customer.name === name && name
    );

    if (!name || !email || !phone) {
      return toast.warning("Please fill all required fileds");
    }

    // if (checkEmail) {
    //   return toast.error("This email is already exists!");
    // }

    // if (checkPhone) {
    //   return toast.error("This phone is already exists!");
    // }

    // if (checkName) {
    //   return toast.error("This name is already exists!");
    // }

    const data = {
      id: parseInt(id),
      name,
      email,
      phone,
    };

    dispatch({ type: "UPDATE_CUSTOMER", payload: data });
    toast.success("Customer updated sucessfully!!");
    history.push("/sales");
  };

  return (
    <div>
      {currentCustomer ? (
        <>
          <Row>
            <Col span={24} style={{ backgroundColor: "#fff" }}>
              <div className="table_header">
                <Title level={4}>Edit Customer of Id {id}</Title>
              </div>
              <div className="back_button">
                <Link exact to="/sales">
                  <Button
                    type="default"
                    shape="round"
                    icon={<ArrowLeftOutlined />}
                  >
                    Back
                  </Button>
                </Link>
              </div>
              <Row justify="center">
                <Col span={20} offset={6}>
                  <Form
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
                        Update
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <h3>Customer with id {id} not exists!</h3>
      )}
    </div>
  );
};

export default EditCustomer;

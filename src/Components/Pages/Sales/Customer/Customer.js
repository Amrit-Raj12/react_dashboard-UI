import React, { useState, useEffect } from "react";
import "./AddCustomer.css";
import { Link, useHistory } from "react-router-dom";
import { Table, Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  EditOutlined,
  UserAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const Customer = () => {
  const [state, setState] = useState([]);
  const customers = useSelector((state) => state);

  const history = useHistory();

  const dispatch = useDispatch();

  const deleteCustomer = (id) => {
    dispatch({ type: "DELETE_CUSTOMER", payload: id });
    toast.success("Customer deleted sucessfully!");
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, [customers]);

  const getData = () => {
    setState(
      customers.map((customer, id) => ({
        Name: customer.name,
        Email: customer.email,
        Phone: customer.phone,
        id: customer.id,
        key: customer.id,
      }))
    );
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: 150,
    },
    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      width: 150,
    },
    {
      key: "5",
      title: "Actions",
      render: (id) => {
        return (
          <>
            <Link to={`/edit/${id.id}`} style={{ paddingRight: "40px" }}>
              <EditOutlined
              // onClick={() => {
              //   onEditStudent(record);
              // }}
              />
            </Link>
            <DeleteOutlined
              onClick={() => {
                deleteCustomer(id.id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
    // {
    //   title: "Action",
    //   dataIndex: "Id",
    //   render: () => (
    //     <>
    //       <Link to={`/edit/${0}`} style={{ paddingRight: "40px" }}>
    //         Edit
    //       </Link>
    //       <Button type="primary" onClick={() => deleteCustomer(1)} danger>
    //         Delete
    //       </Button>
    //     </>
    //   ),
    // },
  ];

  return (
    <div>
      <div className="table_header">
        <Title level={4}>Customer List</Title>
      </div>
      <div className="add_button">
        <Link exact to="/add">
          <Button type="default" shape="round" icon={<UserAddOutlined />}>
            Add Customer
          </Button>
        </Link>
      </div>
      <div className="customerList">
        {/* <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, id) => ({
              Name: customer.name,
              Email: customer.email,
              id: row.id
            }
            

                


              // <tr>
              //   <td>{id + 1}</td>
              //   <td>{customer.name}</td>
              //   <td>{customer.email}</td>
              //   <td>{customer.phone}</td>
              //   <td>
              //     <Link to={`/edit/${customer.id}`}>Edit</Link>
              //     <Button>Delete</Button>
              //   </td>
              // </tr>
            ))}
          </tbody>
        </table> */}
        <Table
          columns={columns}
          dataSource={state}
          pagination={{
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20"],
          }}
        />
      </div>
    </div>
  );
};

export default Customer;

import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Slider, Select, Button, Input } from "antd";

const { Option } = Select;

const CustomSearchFilter = () => {
  const [userData, setUserData] = useState([]);
  const [userSearchData, setUserSearchData] = useState([]);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const data = [
      {
        name: "Amrit",
        age: "24",
        profession: "FDE",
        key: "1",
        tags: ["fulfilled"],
      },
      {
        name: "Amit",
        age: "27",
        profession: "SDE",
        key: "2",
        tags: ["fulfilled", "paid"],
      },
      {
        name: "Aman",
        age: "24",
        profession: "BDE",
        key: "3",
        tags: ["unfulfilled"],
      },
      {
        name: "Saqlain",
        age: "23",
        profession: "BDE",
        key: "4",
        tags: ["rejected"],
      },
      {
        name: "Harsh",
        age: "22",
        profession: "SDA",
        key: "5",
        tags: ["Subscribtion"],
      },
    ];
    setUserData(data);
    setUserSearchData(data);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Profession",
      dataIndex: "profession",
      key: "profession",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "fulfilled" || tag === "paid") {
              color = "green";
            }
            if (tag === "rejected") {
              color = "volcano";
            } else if (tag === "unfulfilled") {
              color = "#8c8c8c";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const handleSearch = () => {
    const newData = userData
      .filter((x) => x.name === (name === "" ? x.name : name))
      .filter(
        (y) => y.profession === (profession === "" ? y.profession : profession)
      )
      .filter((z) => z.age === (age === "" ? z.age : age));
    // setUserData(newData);
    setUserSearchData(newData);
  };

  return (
    <div>
      <table>
        <th>Filter</th>
        <tr>
          <td>
            <Input
              type="text"
              placeholder="Enter Name..."
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <Select
              onChange={(e) => setProfession(e)}
              showSearch
              style={{ width: 220 }}
              placeholder="Select Profession..."
            >
              <Option value="SDE">SDE</Option>
              <Option value="FDE">FDE</Option>
              <Option value="SDA">SDA</Option>
              <Option value="BDE">BDE</Option>
            </Select>
          </td>
          <td>
            {/* <Slider defaultValue={0} onChange={(e) => setAge(e.target.value)} /> */}
            <Input
              type="number"
              placeholder="Enter Age..."
              onChange={(e) => setAge(e.target.value)}
              style={{ width: 220 }}
            />
          </td>
          <td>
            <Button onClick={() => handleSearch()}>Search</Button>
          </td>
        </tr>
      </table>
      <Table columns={columns} dataSource={userSearchData} />
      {/* <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.length > 0
            ? userData.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.profession}</td>
                </tr>
              ))
            : "No Data"}
        </tbody> */}
      {/* </Table> */}
    </div>
  );
};

export default CustomSearchFilter;

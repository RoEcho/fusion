import { useState } from "react";
import { Table, Tag, Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import EditDrawer from "../components/classManage/EditDrawer";

function ClassManage() {
  const [classItem, setClassItem] = useState(null);
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="link">{text}</span>,
    },
    {
      title: "序号",
      dataIndex: "sort",
      key: "sort",
    },
    {
      title: "描述",
      dataIndex: "describe",
      key: "describe",
    },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
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
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <span className="link" onClick={() => showDrawer(record)}>
            编辑
          </span>
          <span className="link">删除</span>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      sort: 32,
      describe: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      sort: 42,
      describe: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      sort: 32,
      describe: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const showDrawer = (item) => {
    setClassItem({
      itemInfo: item,
      visible: true,
    });
  };

  return (
    <>
      <div style={{ background: "#fff", padding: "16px", marginTop: "16px" }}>
        <div style={{textAlign: "right", paddingBottom: "10px"}}>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => showDrawer(null)}>
            新增
          </Button>
        </div>
        <Table columns={columns} dataSource={data} bordered size="small" />
      </div>
      <EditDrawer classItem={classItem} />
    </>
  );
}

export default ClassManage;

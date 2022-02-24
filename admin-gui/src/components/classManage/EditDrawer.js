import { useState, useEffect } from "react";
import { Form, Input, Button, Drawer, InputNumber } from "antd";

function EditDrawer(props) {
  const [visible, setVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("新增分类");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const showDrawer = () => {
      setVisible(true);
      if(props.classItem?.itemInfo) {
        // 表单初始化
        setDrawerTitle("编辑分类");
      }else {
        setDrawerTitle("新增分类");
      }
    };

    if (props.classItem?.visible) {
      showDrawer();
    }
  }, [props]);

  return (
    <>
      <Drawer
        title={drawerTitle}
        placement="right"
        width={640}
        onClose={onClose}
        visible={visible}
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="名称"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入分类名称!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="排序号"
            name="sort"
            rules={[
              {
                required: true,
                message: "请输入排序号!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="描述"
            name="describe"
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button style={{marginLeft: "16px"}} onClick={onClose}>取消</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default EditDrawer;

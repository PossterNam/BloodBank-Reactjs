import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddBloodGroup } from "../../Service/CallAPI";

export default function Create(props) {
  const navigate = useNavigate();

  const onFinish = async (data) => {
    console.log(data);
    try {
      await AddBloodGroup(data);
      navigate(-1);
    } catch (error) {}
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
      >
        <Form.Item label="Blood Name" name="bloodName">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="secondary" onClick={() => navigate(-1)}>
            goBack
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

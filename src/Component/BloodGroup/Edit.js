import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditBloodGroupById, getBloodGroupById } from "../../Service/CallAPI";

export default function Edit(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bloodGroup, setBloodGroup] = useState({});

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    await getBloodGroupById(parseInt(id)).then((res) => setBloodGroup(res));
  };

  const onFinish = async (data) => {
    try {
      await EditBloodGroupById(id, data);
      navigate(-1);
    } catch (error) {}
  };

  return (
    <div>
      {bloodGroup.bloodName !== undefined && (
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} onFinish={onFinish} initialValues={bloodGroup}>
          <Form.Item hidden name="groupbloodId">
            <Input/>
          </Form.Item>
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
      )}
    </div>
  );
}

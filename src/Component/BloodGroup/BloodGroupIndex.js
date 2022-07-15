import { Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteBloodGroupById, GetBloodGroup } from "../../Service/CallAPI";
import { EditOutlined ,DeleteOutlined} from "@ant-design/icons";
function BloodGroupIndex(props) {
  const [groupBlood, setGroupBlood] = useState([]);

  useEffect(() => {
    fetchData();
  }, [groupBlood]);

  const fetchData = async () => {
    await GetBloodGroup().then((res) => setGroupBlood(res));
  };

  const deleteItem = async (id) => {
    await deleteBloodGroupById(id).then((res) => {
      if (res.status === 200) {
        fetchData();
      }
    });
  };

  return (
    <div className="m-5">
      <div>
        <Link className="btn btn-primary" to="/BloodGroup/Add">
          Create
        </Link>
      </div>
      <Table rowKey={1} dataSource={groupBlood}>
        <Column title="ID" dataIndex="groupbloodId" key="groupbloodId" />
        <Column title="Blood Group Name" dataIndex="bloodName" key="bloodName" />
        <Column
          title="Action"
          dataIndex=""
          key=""
          render={(record) => (
            <div key={record.groupbloodId}>
              <Link className="btn text-warning" to={"/BloodGroup/edit/" + record.groupbloodId}>
                <EditOutlined />
              </Link>
              <button className="btn text-danger" onClick={(e) => deleteItem(record.groupbloodId)}><DeleteOutlined /> </button>
            </div>
          )}
        />
      </Table>
    </div>
  );
}

export default memo(BloodGroupIndex);

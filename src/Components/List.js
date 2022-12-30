import React, { useState } from "react";
import "../css/List.css";

import Add from "./Add";
import ClearAll from "./ClearAll";
import Delete from "./Delete";
import Edit from "./Edit";

function setRank(marks) {
  if (marks >= 8) {
    return "Gioi";
  } else if (marks >= 6.5) {
    return "Kha";
  } else if (marks >= 5) {
    return "Trung binh";
  } else {
    return "Yeu";
  }
}

function Information(props) {
  //console.log(props);
  const { id, name, birth, address, marks, ranks } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{birth}</td>
      <td>{address}</td>
      <td>{marks}</td>
      <td>{ranks}</td>
      <td>
        <button className="btn btn__edit" onClick={props.editInfor}>
          Sửa
        </button>
      </td>
      <td>
        <button className="btn btn__delete" onClick={props.deleteInfor}>
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default function List() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Nguyen Xuan Nguyen",
      birth: "13/02/1999",
      address: "Quang Ngai",
      marks: 9,
      Rank: "",
    },
    {
      id: 2,
      name: "Nguyen Xuan N",
      birth: "23/07/1999",
      address: "Quang Nam",
      marks: 7,
      Rank: "",
    },
    {
      id: 3,
      name: "Nguyen Xuan A",
      birth: "19/12/1999",
      address: "Quang Binh",
      marks: 6,
      Rank: "",
    },
    {
      id: 4,
      name: "Nguyen Xuan X",
      birth: "17/04/1999",
      address: "Quang Ninh",
      marks: 4,
      Rank: "",
    },
    {
      id: 5,
      name: "Nguyen Xuan G",
      birth: "25/08/1999",
      address: "Quang Ngai",
      marks: 7,
      Rank: "",
    },
    {
      id: 6,
      name: "Nguyen Xuan B",
      birth: "13/02/1998",
      address: "Quang Nam",
      marks: 9,
      Rank: "",
    },
    {
      id: 7,
      name: "Nguyen Xuan N",
      birth: "23/07/1999",
      address: "Quang Nam",
      marks: 7,
      Rank: "",
    },
    {
      id: 8,
      name: "Nguyen Xuan A",
      birth: "19/12/1999",
      address: "Quang Binh",
      marks: 6,
      Rank: "",
    },
    {
      id: 9,
      name: "Nguyen Xuan X",
      birth: "17/04/1999",
      address: "Quang Ninh",
      marks: 4,
      Rank: "",
    },
    {
      id: 10,
      name: "Nguyen Xuan G",
      birth: "25/08/1999",
      address: "Quang Ngai",
      marks: 7,
      Rank: "",
    },
    {
      id: 11,
      name: "Nguyen Xuan B",
      birth: "13/02/1998",
      address: "Quang Nam",
      marks: 9,
      Rank: "",
    },
  ]);

  const [isShow, setIsShow] = useState(false);
  const [isShowEdit, setisShowEdit] = useState(false);
  const [isShowDelete, setisShowDelete] = useState(false);
  const [isShowDeleteAll, setisShowDeleteAll] = useState(false);
  const [dataDel, setDataDel] = useState(null);
  const [dataEdit, setDataEdit] = useState(null);

  function addStudent() {
    setIsShow(true);
  }

  function deleteAll() {
    setisShowDeleteAll(true);
  }

  function handleDeleteAll() {
    setData([]);
    setisShowDeleteAll(false);
  }

  function editInfor(params) {
    setisShowEdit(true);
    setDataEdit(params);
    //console.log(params, "abs");
  }

  function deleteInfor(params) {
    //console.log(params);
    setisShowDelete(true);
    setDataDel(params);
  }

  function handleSubmit(infor) {
    setIsShow(false);
    infor.id = data.length + 1;
    data.push(infor);
  }

  function handleEdit(params) {
    console.log(params);
    const index = data.indexOf(dataEdit);
    data[index] = params;
    console.log(index);

    setisShowEdit(false);
  }

  function handleDelete() {
    //console.log(dataDel);
    let resultFilter = data.filter((item) => item.id !== dataDel.id);
    console.log(resultFilter);
    if (resultFilter) {
      setData([...resultFilter]);
    }
    setisShowDelete(false);
  }

  return (
    <div className="container">
      <button className="btn" onClick={addStudent}>
        Thêm học sinh
      </button>
      <button className="btn btn__deleteAll" onClick={deleteAll}>
        Xóa tất cả
      </button>
      {isShowDeleteAll && (
        <ClearAll
          onClose={() => setisShowDeleteAll(false)}
          delAllInfor={handleDeleteAll}
        />
      )}
      {isShow && <Add handleSubmit={handleSubmit} />}
      {isShowEdit && <Edit handleEdit={handleEdit} dataEdit={dataEdit} />}
      {isShowDelete && (
        <Delete
          onClose={() => setisShowDelete(false)}
          delInfor={handleDelete}
        />
      )}
      <div className="list">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Điểm </th>
              <th>Xếp loại</th>
              <th>Thay đổi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Information
                editInfor={() => editInfor(item)}
                deleteInfor={() => deleteInfor(item)}
                key={item.id}
                id={index + 1}
                name={item.name}
                birth={item.birth}
                address={item.address}
                marks={item.marks}
                ranks={setRank(item.marks)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

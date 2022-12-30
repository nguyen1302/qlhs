import React, { useEffect, useState } from "react";

export default function Edit(props) {
  const { dataEdit } = props;

  const [values, setValues] = useState({
    name: "",
    birth: "",
    address: "",
    marks: "",
  });

  useEffect(() => {
    if (dataEdit) {
      //console.log(dataEdit, "rng");
      setValues({
        name: dataEdit.name,
        birth: dataEdit.birth,
        address: dataEdit.address,
        marks: dataEdit.marks,
      });
    }
  }, [dataEdit]);

  const handleEdit = () => {
    props.handleEdit(values);
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <div className="add">
      {/* <button className="add__button">Thêm học sinh</button> */}
      <form class="form">
        <p>NHẬP THÔNG TIN HỌC SINH</p>
        <input
          type="text"
          className="form__item"
          placeholder="Nhập tên"
          value={values.name}
          onChange={set("name")}
        />
        <input
          type="text"
          className="form__item"
          placeholder="Nhập ngày sinh"
          value={values.birth}
          onChange={set("birth")}
        />
        <input
          type="text"
          className="form__item"
          placeholder="Nhập địa chỉ"
          value={values.address}
          onChange={set("address")}
        />
        <input
          type="text"
          className="form__item"
          placeholder="Nhập điểm"
          value={values.marks}
          onChange={set("marks")}
        />

        <button
          type="button"
          className="btn btn_submit"
          onClick={() => handleEdit()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "../css/List.css";

export default function Add(props) {
  const [values, setValues] = useState({
    name: "",
    birth: "",
    address: "",
    marks: "",
  });
  const handleSubmit = () => {
    props.handleSubmit(values);
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
          onClick={() => handleSubmit()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

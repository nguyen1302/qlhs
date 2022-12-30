import React from "react";
import "../css/List.css";

export default function ClearAll(props) {
  function yes() {
    props.delAllInfor();
    //props.onClose();
  }
  function no() {
    props.onClose();
  }

  return (
    <div>
      <button className="btn btn__yes" onClick={yes}>
        Yes
      </button>
      <button className="btn btn__no" onClick={no}>
        No
      </button>
    </div>
  );
}

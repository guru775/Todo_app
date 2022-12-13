import React from "react";
import { FaEdit } from "react-icons/fa";
function Edit({ edit }) {
  return (
    <div>
      <button id="edit" onClick={edit}>
        <FaEdit />
      </button>
    </div>
  );
}

export default Edit;

import React from "react";
import { MdDelete } from "react-icons/md";
function Delete({ remove }) {
  return (
    <div>
      <button id="delete" onClick={remove}>
        <MdDelete />
      </button>
    </div>
  );
}

export default Delete;

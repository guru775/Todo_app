import React from "react";

function Input({ change, click, v }) {
  return (
    <div id="input-area">
      <textarea
        onChange={change}
        placeholder="Enter something..."
        value={v}
      ></textarea>
      <button onClick={click} id="add-button">
        Add Todo
      </button>
    </div>
  );
}

export default Input;

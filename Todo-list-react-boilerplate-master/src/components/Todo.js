import React, { useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Input from "./Input";
import "./../styles/Todo.css";
import Notification from "./Notification";

function Todo() {
  const [value, setValue] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState("");
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState("");
  const change = (e) => {
    setTodo(e.target.value); //jilani
  };
  const click = (e) => {
    let newTodo = {
      id: new Date().getTime(), //
      text: todo, //text:jilani
    };
    setValue([...value].concat(newTodo)); //[{id:222222, text:'jeyson'}, {id:223333, text:'guru'}]
    setTodo("");
  };

  const removeElement = (id) => {
    let updatedTodo = [...value].filter((item) => item.id !== id);
    setValue(updatedTodo);
    setRemaining(<Notification />);
    setTimeout(() => {
      setRemaining("");
    }, 3000);
  };

  function updateItem(id) {
    const updatedTodos = [...value].map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setValue(updatedTodos);
    setEdit(null);
    setText("");
  }

  return (
    <div>
      <table>
        <tbody>
          <Input change={change} click={click} v={todo} />
          {value.length === 0 ? (
            <h3>You haven't assigned any tasks</h3>
          ) : (
            <h3>{value.length} tasks pending</h3>
          )}
          {value.map((item) => {
            return (
              <div id="item" key={item.id}>
                <tr>
                  {item.id === edit ? (
                    <div>
                      <td id="col-1st-1">
                        <input
                          type="text"
                          placeholder="Edit here"
                          onChange={(e) => setText(e.target.value)}
                          value={text}
                          required
                        />
                      </td>
                      <td>
                        <button id="ok" onClick={() => updateItem(item.id)}>
                          ok
                        </button>
                      </td>
                    </div>
                  ) : (
                    <div id="appear">
                      <td id="col-1st-2">
                        <h2>{item.text}</h2>
                      </td>
                      <td>
                        <Edit edit={() => setEdit(item.id)} />
                      </td>
                      <td>
                        <Delete remove={() => removeElement(item.id)} />
                      </td>
                    </div>
                  )}
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
      {remaining}
    </div>
  );
}

export default Todo;

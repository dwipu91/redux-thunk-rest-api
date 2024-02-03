import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, delete_todo, eidet_todo } from "../redux/todo/action";

const Todo = () => {
  const { todo } = useSelector((state) => state);

  const [input, setInput] = useState();

  const dispath = useDispatch();

  // todo create
  const handleTooCreate = () => {
    dispath(createTodo(input));
  };

  // delete todo data
  const handleDataDelete = (item) => {
    dispath(delete_todo(item));
  };

  // data eidet
  const handleDataEidet = (item) => {
    dispath(eidet_todo(item));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleTooCreate}>Add Data</button>
        <hr />
        <ul>
          {todo.length > 0
            ? todo.map((item, index) => (
                <li key={index}>
                  {index + 1}: {item}{" "}
                  <button onClick={() => handleDataDelete(item)}>x</button>
                  <button onClick={() => handleDataEidet(item)}>e</button>
                </li>
              ))
            : "Data is NOT found"}
        </ul>
      </div>
    </>
  );
};

export default Todo;

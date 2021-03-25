import React from "react";
import { useState } from "react";

export const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const [finish, setFinish] = useState(0);

  function inputHandler(e) {
    setTodo(e.target.value);
  }
  function add() {
    if (todo.length > 0) {
      setTodoList((prevTodo) => [
        ...prevTodo,
        {
          name: todo,
          completed: false,
          id: Math.random() * 1000
        }
      ]);
    }
    setTodo("");
  }

  function changeHandler(id) {
    setTodoList((prevTodos) =>
      prevTodos.map((prevTodos) =>
        prevTodos.id === id
          ? { ...prevTodos, completed: !prevTodos.completed }
          : prevTodos
      )
    );
    // todoList.map((item) => item.completed === true)
    //   ? setFinish((finish) => finish + 1)
    //   : setFinish((finish) => finish - 1);
  }

  function deleteItem(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  return (
    <div className="ToDo">
      <h1> ToDo </h1>
      {/* <h2> Finished Tasks: {finish} </h2>
      <h2> Unfinished Tasks: {todoList.length - finish} </h2> */}
      <input onChange={inputHandler} value={todo}></input>
      <button onClick={add}>Add</button>
      {todoList.map(({ name, completed, id }) => (
        <div
          key={id}
          style={
            completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          onClick={() => changeHandler(id)}
        >
          {name} <button onClick={() => deleteItem(id)}> delete </button>
        </div>
      ))}
    </div>
  );
};

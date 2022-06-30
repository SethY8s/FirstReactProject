import React, { useState } from 'react';

let globalId = 0;

function CreateTodo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    setTodos((oldTodos) => {
      setTask('');
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  function deleteTodo(itemId) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemId));
  }

  console.log(todos);

  return (
    <div>
      <h1>First todo app</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Add todo</button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>
                {item.todo} ({item.id})
              </li>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CreateTodo;

// this creates everything

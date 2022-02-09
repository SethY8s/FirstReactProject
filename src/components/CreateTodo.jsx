import React from 'react';
import TodoList from './TodoList';

function CreateTodo() {
  return (
    <div>
      <div className="box">
        <div className="text-end">
          <h2>React Todo</h2>
          <h4>Add new Todo</h4>
        </div>
        <input type="text" name="todo" placeholder="write Todo" />
        <button className="btn-addTodo" type="button" name="addTodo">
          Add Todo
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default CreateTodo;

// this creates everything

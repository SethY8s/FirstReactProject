import React, {useState} from 'react';
import TodoList from './TodoList';

function CreateTodo() {

    const[todo, setTodo] = useState();
    const[list, setList] = useState([]);

    const AddTodo = (e) => {
        e.preventDefault();
        const newList = list;
        newList.push(todo);
        setList([...newList]);
    }


  return (
    <div>
        <div>
      <div className="box">
        <div className="text-end">
          <h2>React Todo</h2>
          <h4>Add new Todo</h4>
        </div>
        <input onChange={(ev)=>{setTodo(ev.target.value)}}
            type="text" name="todo" placeholder="write Todo" />
        <button onClick={AddTodo} className="btn-addTodo" type="button" name="addTodo">
          Add Todo
        </button>
      </div>
      {list.map((singleTodo) => {
          return <div>{singleTodo}</div>
      })}
      </div>
      {JSON.stringify(list)}
      <TodoList />
    </div>
  );
}

export default CreateTodo;

// this creates everything

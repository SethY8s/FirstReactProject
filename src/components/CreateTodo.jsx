import React from 'react'

function CreateTodo() {
    return (
        
        <div className="box">
            
            <div className="text-end">
                <h2>React Todo</h2>
                <h4>Add new Todo
                </h4>
            </div>
            <input type="text" name="todo" placeholder='write Todo'/>
            <button type='button' name='addTodo'>Add Todo</button>
        </div>
        
    )
}

export default CreateTodo

// this creates everything
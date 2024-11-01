

import React, { useState } from 'react'

 function EditTodoform({editTodo,task}) {
    const [value,setValue]=useState(task.task);
    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log(value);
        if(value.trim()){
            editTodo(value,task.id);
            setValue('');
        }
        //addTodo(value);
    }
  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' value={value}className='todo-input' placeholder='Update Task ' onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    </div>
  )
}

export default  EditTodoform;

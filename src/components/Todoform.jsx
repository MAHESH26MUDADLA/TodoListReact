

import React, { useState } from 'react'

 function Todoform({addTodo}) {
    const [value,setValue]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log(value);
        if(value.trim()){
            addTodo(value);
            setValue('');
        }
        //addTodo(value);
    }
  return (
    <div>
        <form  onSubmit={handleSubmit} className='TodoForm'>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='what is the task today?' />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    </div>
  )
}

export default  Todoform;

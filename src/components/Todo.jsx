import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

 function Todo({task,toggleComplete,deleteTodo,editTodo}) {
  return (
    <div className='Todo' >
        <p className={`${task.completed ?'completed' : "incompleted"}`}  onClick={()=> toggleComplete(task.id)} >{task.task}</p>
        <div>
        <FontAwesomeIcon style={{cursor:'pointer'}} icon = {faPenToSquare} onClick={()=>editTodo(task.id)} />
        <FontAwesomeIcon style={{cursor:'pointer'}}  icon = {faTrash} onClick={()=>deleteTodo(task.id)}/>
        
        </div>
    </div>
  )
}

export default Todo;

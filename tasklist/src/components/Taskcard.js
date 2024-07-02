import React from 'react'
import "./Taskcard.css"
export const Taskcard = (props) => {
  return (
    <li className={props.task.completed ? "completed":"incomplete"}>
    <span>{props.task.id}-{props.task.name}</span>
    <button onClick={()=>props.handleDelete(props.task.id)} >Delete</button>
  </li>
    
  )
}

import React, { useRef, useState } from 'react'
import './addTask.css'

export const AddTask = ({tasks,setTasks}) => {

 //   const[task,setTask]=useState("");
 const taskRef=useRef("");
    const[progress,setProgress]=useState(false);

// function handleChange(event){
// setTask(event.target.value);

// }

const handleReset=()=>{
  //  setTask("");
  taskRef.current.value="";
    setProgress(false);
}

const handleSubmit=(event)=>{
    event.preventDefault();
    const taskval={
        id:Math.floor( Math.random()*10000),
        name:taskRef.current.value,
        completed:Boolean(progress)
    }
    setTasks([...tasks,taskval]);
console.log(taskval);
}

  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Task name:</label>
            <input type='text' 
            name='task' id='task'  ref={taskRef}
            placeholder='task name' autoComplete='off'></input>

           <select onChange={(event)=>setProgress(event.target.value)} value={progress}>
            <option value={false}>pending</option>
            <option value={true}>completed</option>
           </select>
            <button type='submit'>Add Task</button>
            <span  onClick={handleReset} className='reset'>Reset</span>
        </form>
        <p></p>

    </section>
  )
}

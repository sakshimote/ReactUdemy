import React from 'react'
import { useState } from 'react';
import { Taskcard } from './Taskcard';
import { Boxcard } from './Boxcard';


export const Tasklist = ({tasks,setTasks}) => {

    const[show,setShow]=useState(true);
    
    
    function handleDelete(id){
    setTasks( tasks.filter(task=>task.id!==id));
    }

  return (

    <>
    <h1>Task List </h1>
     <ul>
    <button className='trigger' onClick={()=>setShow(!show)}>Toggle</button>
    {show && tasks.map((task)=>(
    <Taskcard key={task.id} task={task} handleDelete={handleDelete}/>
    ))}
 
   </ul>

   <Boxcard result="success">

<p className='title'>mhdfhdkdjsadkegkuvmbmdshflkshlfkh</p>
<p className='description'>jhdkjghkjsygiuryiugyywemnzxgcjhgsajhdgasj</p>
   
   </Boxcard>


   <Boxcard result="alert">
   <p className='title'>mhdfhdkdjsadkegkuvmbmdshflkshlfkh</p>
   <p className='description'>jhdkjghkjsygiuryiugyysajhdgasj</p>
   </Boxcard>

    </>
   
  )
}

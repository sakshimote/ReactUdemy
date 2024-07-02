
import { Header } from './components/Header';
import { Tasklist } from './components/Tasklist';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import { useState } from 'react';
import './App.css';

 

function App() {

  const[tasks,setTasks]=useState([])

const info="random";

  return (
    <div className="App">
       <Header/> 
       <main> 

       <AddTask tasks={tasks} setTasks={setTasks}/>
       <Tasklist title="random" info={info} tasks={tasks} setTasks={setTasks}/>
       </main>
      
        <Footer/>
    </div>
    
  );
}

export default App;

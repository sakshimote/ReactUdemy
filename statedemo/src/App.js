
import { useState } from 'react';
import './App.css';

function App() {
//let count =0;
const[count,setCount]=useState(0);


function countAdd(){
  // count+=1;
  // console.log(count);
 // setCount(count+1);
  setCount(count=>count+1);
  setCount(count=>count+1);
}
function countSub(){
  setCount(count-1);
}




  return (
    <div className="App">
     <div className="box">
      <p>{count}</p>
      <button className="add"  onClick={countAdd}>Add</button>
      <button className="sub"  onClick={countSub}>Subtract</button>
      <button className='reset' onClick={()=>{setCount(0)}}>Reset</button>
     </div>
    </div>
  );
}

export default App;

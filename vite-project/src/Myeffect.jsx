import React, { useState, useEffect } from 'react';

function Myeffect() {
  const [count, setCount] = useState(0);
  const[color,setcolor]=useState("blue")

  useEffect(() => {
    // return ()=>{
    console.log("button clicked!!!")
    console.log("counter is:", count);

// }

  }, [count]); 
  document.title=`count ${count}, ${color}`

 
  return (
    <div>
      <h1>React useEffect Hook</h1>
      <h3 style={{color:color}}>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)} style={{background:color}}>Increment</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={() => setCount(count - 1)} style={{background:color}}>decrement</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={()=>setcolor(color==="blue"? "red" : "blue")}style={{color:color}}>change color</button> 
    </div>
  );
}

export default Myeffect;

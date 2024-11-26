import React from 'react'
import { useState } from 'react'

function Mystate() {
    const[num,setnum]=useState(0)
    const[name,setName]=useState(" ex: eric nkurunziza ")
  return (
  <>
  <div>

    <h1> react usestate hooks</h1>

    <p>click on the button to increment or decrement</p>
    <button onClick={()=>setnum(num+1)}> increment</button>
    &nbsp; &nbsp; &nbsp; &nbsp;
     <button onClick={()=>setnum(num-1)}> decrement</button>
    <h3>updated nuber is : {num}</h3>


    <input type="text" value={name} onChange={(x)=>setName(x.target.value)}/>
    <h3>your name is: {name}</h3>
   

  </div>
  </>
  )
}

export default Mystate
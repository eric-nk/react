import React, { Component, useState } from 'react'
import Test from './Test'

function Mycontext() {
  const [user,setuser]=useState("eric")

  return (
   <>
   <h1> react usecontext hooks</h1>
   <h2>hellow {user}</h2>
 <Test/>
   </>
  )
}

export default Mycontext
import React from 'react'
import Mystate from './Mystate';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mycontext from './Mycontext';
import Myeffect from './Myeffect';

function App() {
  return (
    <div>
<Mystate/>
<Myeffect/>
<Mycontext/>


  
 </div>
  )
}

export default App
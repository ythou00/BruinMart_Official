import { useState } from 'react'
import './App.css'
import NavBar from './component/navBar.jsx'
import Page1 from './component/page1.jsx'
import Page2 from './component/page2.jsx'
import Home from './component/home.jsx'
import SaveList from './component/saveList.jsx'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import MessageCenter from './component/MessageCenter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="container">
        {/* <h1>Web Dev Simplified!!!!!!</h1>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/saveList" element={<SaveList />} />
        </Routes>
      </div>
      
      {/* Your new Message Center component */}
<MessageCenter />
    </>
  )
}

export default App
import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css'
import NavBar from './component/navBar.jsx'
import Page1 from './component/page1.jsx'
import MessageCenter from './component/MessageCenter'
import Home from './component/home.jsx'
import SaveList from './component/saveList.jsx'
import SearchPage from './component/searchpage'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        {/* <h1>Web Dev Simplified!!!!!!</h1>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/MessageCenter" element={<MessageCenter />} />
          <Route path="/saveList" element={<SaveList />} />
        </Routes>
      </div>
      
      {/* Your new Message Center component */}
      {/* <MessageCenter /> */}
      <SearchPage/>
    </>
  );
}

export default App
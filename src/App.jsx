import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css'
import NavBar from './component/navBar.jsx'
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
          <Route path="/Home" element={<Home />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/MessageCenter" element={<MessageCenter />} />
          <Route path="/SaveList" element={<SaveList />} />
        </Routes>
      </div>
      
      {/* <HeroSection /> */}
      {/* Your new Message Center component */}
      {/* <MessageCenter /> */}
      {/* <SearchPage/> */}
    </>
  );
}

export default App
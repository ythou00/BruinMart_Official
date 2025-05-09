import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css'
import NavBar from './component/navBar.jsx'
import MessageCenter from './component/MessageCenter'
import Home from './component/home.jsx'
import SaveList from './component/saveList.jsx'
import SearchPage from './component/searchPage'
import SellGuide from './component/sellGuide.jsx'


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        {/* <h1>Web Dev Simplified!!!!!!</h1>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Marketplace" element={<SearchPage />} />
          <Route path="/Inbox" element={<MessageCenter />} />
          <Route path="/SaveList" element={<SaveList />} />
          <Route path="/Sell-Guide" element={<SellGuide />} />
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
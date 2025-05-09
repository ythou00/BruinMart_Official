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
import LoginPage from './component/page1.jsx'
import AboutPage from './component/about.jsx'


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        {/* <h1>Web Dev Simplified!!!!!!</h1>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<SearchPage />} />
          <Route path="/inbox" element={<MessageCenter />} />
          <Route path="/save-list" element={<SaveList />} />
          <Route path="/sell-guide" element={<SellGuide />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about-us" element={<AboutPage />} />
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
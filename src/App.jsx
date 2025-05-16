import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css'
import NavBar from './component/navBar.jsx'
import MessageCenter from './component/MessageCenter'
import Home from './component/home.jsx'
import SaveList from './component/saveList.jsx'
import SearchPage from './component/searchPage.jsx'
import SellGuide from './component/sellGuide.jsx'
import LoginPage from './component/page1.jsx'
import AboutPage from './component/about.jsx'
import CreateUser from './component/CreateUser.jsx'
import SelectInterests from './component/SelectInterests.jsx'
import FinishUser from './component/FinishUser.jsx'
import ProfilePage from './component/profile.jsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<SearchPage />} />
          <Route path="/inbox" element={<MessageCenter />} />
          <Route path="/save-list" element={<SaveList />} />
          <Route path="/sell-guide" element={<SellGuide />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path = "/create-user" element = {<CreateUser/>}/>
          <Route path = "/user-setup" element = {<SelectInterests/>}/>
          <Route path = "/setup-complete" element = {<FinishUser/>}/>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
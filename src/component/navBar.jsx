import React from 'react'
import './navBar.css'
import SearchBar from "./searchBar"
import SearchData from './data.json'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavBar() {
    return <nav className="nav">
        <div className="left">
            <Link to="/" className="site-title">BruinMart</Link>
        </div>
        <div className="center">
            <ul>
                <li><Link to="/Home" className="nav-link">Home</Link></li>
                <li className="active"><Link to="/Marketplace" className="nav-link">Marketplace</Link></li>
                <li><Link to="/Inbox" className="nav-link">Inbox</Link></li>
                <li><Link to="/SaveList" className="nav-link">Save List</Link></li>
            </ul>
        </div>
        <div className="right">
            {/*
            <SearchBar placeholder="What are you looking for?" data={SearchData}/>
            */}
        </div>
        
    </nav>
}
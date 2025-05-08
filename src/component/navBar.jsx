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
                <li><Link to="/Home">Home</Link></li>
                <li className="active"><Link to="/SearchPage">Search Page</Link></li>
                <li><Link to="/MessageCenter">Message Center</Link></li>
                <li><Link to="/SaveList">Save List</Link></li>
            </ul>
        </div>
        <div className="right">
            {/*
            <SearchBar placeholder="What are you looking for?" data={SearchData}/>
            */}
        </div>
        
    </nav>
}
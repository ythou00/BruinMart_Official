import React from 'react'
import './navBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavBar() {
    return <nav className="nav">
        <div className="left">
            <Link to="/" className="site-title">BruinMart</Link>
        </div>
        <div className="center">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li className="active"><Link to="/SearchPage">Search Page</Link></li>
                <li><Link to="/MessageCenter">Message Center</Link></li>
                <li><Link to="/saveList">Save List</Link></li>
            </ul>
        </div>
        <div className="right">

        </div>
        
    </nav>
}
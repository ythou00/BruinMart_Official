import React from 'react'
import './navBar.css'
import SearchBar from "./searchBar"
import SearchData from './data.json'
import { VscAccount } from "react-icons/vsc";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logoImage from '../assets/logo-bm-4.png.jpg'


export default function NavBar() {
    return <nav className="nav">
        <div className="left">
            <Link to="/" className="site-title">
                <img src={logoImage} alt="logo" className="logo-bm" />
                BruinMart
            </Link>
        </div>
        <div className="center">
            <ul>
                <li><Link to="/home" className="nav-link">Home</Link></li>
                <li className="active"><Link to="/marketplace" className="nav-link">Marketplace</Link></li>
                <li><Link to="/inbox" className="nav-link">Inbox</Link></li>
                <li><Link to="/sell-guide" className="nav-link">User Guide</Link></li>
            </ul>
        </div>
        <div className="right">
            <Link to="login" className="login-link">
                <VscAccount className="login-icon"/>  {/* Import a React icon for to use for login icon*/}
                <span className="login-text">Login / Sign Up</span>
            </Link>
        </div>
        
    </nav>
}
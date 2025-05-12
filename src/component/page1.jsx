import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './page1.css'

export default function home() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className = "welcome">Welcome!</div>
            <div className = "welcome-subtext">"Helping Students Make Moves"</div>
            
            <div className = "enter-flex">
                <div className = "enter-input-flex">
                    <label htmlFor = "Username" className = "label">Username</label>
                    <input type = "text" className = "textbox"/>
                </div>

                <div className = "enter-input-flex">
                    <label htmlFor = "Password" className = "label">Password</label>
                    <input type = "password" className = "textbox"/>
                </div>
            </div>

            <button 
                className = "login-button"
                onClick = {() => navigate("/home")}>
                    Login
            </button>
            <div className = "new">New to BruinMarket? <Link to = "/CreateUser">Create an account</Link></div>
        </>
    );

}
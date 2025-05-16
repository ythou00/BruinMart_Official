import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/auth';
import { useState } from 'react';
import './page1.css';

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // for future validation if needed

  return (
    <div className="login-page">
      {/* LEFT LOGIN FORM SIDE */}
      <div className="login-form-side">
        <div className="enter-flex">
          <h1 className="welcome">Welcome!</h1>
          <h3 className="welcome-subtext">"Helping Students Make Moves"</h3>

          <div className="enter-input-flex">
            <label htmlFor="Username" className="label">Username</label>
            <input
              type="text"
              className="textbox"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="enter-input-flex">
            <label htmlFor="Password" className="label">Password</label>
            <input
              type="password"
              className="textbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-button"
            onClick={() => {
              loginUser({ username });
              window.dispatchEvent(new Event("storage")); // <- triggers NavBar to update
              navigate("/home");
            }}
          >
            Login
          </button>

          <div className="new">
            New to BruinMarket? <Link to="/create-user">Create an account</Link>
          </div>
        </div>
      </div>
      {/* RIGHT IMAGE SIDE */}
      <div className="login-image-side">
        <div className="image-overlay-text">
            <div className="image-credit-login">
                Image Credit:{' '}
                <a
                href="https://studios.com/ucla-weyburn-terrace-paseo-and-commons-apartments.html"
                target="_blank"
                rel="noopener noreferrer"
                >
                Studios
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Firebase
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { loginUser } from '../utils/auth';
import { FcGoogle } from "react-icons/fc";

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

          {/* <div className="enter-input-flex">
            <label htmlFor="Username" className="label">Username</label>
            <input
              type="text"
              className="textbox"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> */}

          {/* <div className="enter-input-flex">
            <label htmlFor="Password" className="label">Password</label>
            <input
              type="password"
              className="textbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}

          <button className="login-button"
            onClick={async () => {
              try {
                const result = await signInWithPopup(auth, provider);
                const email = result.user.email;
                const uid = result.user.uid;

                if (email.endsWith("@ucla.edu") || email.endsWith("@g.ucla.edu")) {
                  const userRef = doc(db, "users", uid);
                  const userSnap = await getDoc(userRef);

                  if (userSnap.exists()) {
                    const userData = userSnap.data();
                    loginUser(userData);
                    window.dispatchEvent(new Event("storage"));
                    navigate("/home");
                  } else {
                    navigate("/create-user");
                  }
                } else {
                  alert("Only UCLA accounts are allowed.");
                  await auth.signOut();
                }
              } catch (err) {
                console.error("Login failed:", err);
                alert("Login failed: " + err.message);
              }
            }}
          >
            Sign in with Google
            <span className="google-icon"><FcGoogle /></span>
          </button> 

          <div className="new">
            {/* New to BruinMarket? <Link to="/create-user">Create an account</Link> */}
            New to BruinMart? Please sign-in using your UCLA Gmail to get started
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
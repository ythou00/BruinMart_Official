import { useNavigate } from 'react-router-dom'
import './FinishUserStyles.css'
import { getUser, loginUser } from '../utils/auth';
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";

function FinishUser() {
  const navigate = useNavigate();

  return (
    <div className="finish-user-page">
      <div className="centered-container">
        <div className="congrats">Congrats! 🎉</div>
        <div className="caption">You've successfully created your account!</div>
        <div className="bear">🧸</div>
        <button
          className="done"
          onClick={async () => {
            const user = getUser();
            const auth = getAuth();

            if (user && auth.currentUser) {
              const uid = auth.currentUser.uid;
              await setDoc(doc(db, "users", uid), {
                ...user,
                createdAt: new Date(),
              });

              loginUser(user);
              window.dispatchEvent(new Event("storage"));
              navigate("/home");
            }
          }}
        >
          Done!
        </button>
      </div>
      <div className="image-credit-finish">
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
  )
};
   
   export default FinishUser;
   
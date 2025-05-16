import { useNavigate } from 'react-router-dom'
import './FinishUserStyles.css'
import { getUser, loginUser } from '../utils/auth';

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
          onClick={() => {
            const user = getUser();
            if (user) {
              loginUser(user);
              window.dispatchEvent(new Event("storage")); // <- triggers NavBar to re-check user
            }
            navigate("/home");
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
   
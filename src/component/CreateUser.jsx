import { useNavigate } from 'react-router-dom'
import './CreateUserStyles.css'

function CreateUser() {
  const handleSubmit = (event) => {};

  const navigate = useNavigate();

    return (
      <div className="create-user-page">
        <div className="welcome-side">
          <div className="new-user">Welcome to BruinMart!</div>
          <div className="new-subtext">We are so happy to have you here!</div>
        </div>
        <div className="form-side">
          <div className="create-user-card">
            <div className="names-flex">
              <div>First Name</div>
              <div>Last Name</div>
            </div>

            <div className="names-text-flex">
              <input type="text" className="textbox" />
              <input type="text" className="textbox" />
            </div>

            <div className="select-text-flex">
              <div>Class of</div>
              <div>Gender</div>
            </div>

            <div className="select-flex">
              <select name="class-year" className="selectbox">
                <option value="">Please select one...</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>

              <select name="gender" className="selectbox">
                <option value="">Please select one...</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to answer">Prefer not to answer</option>
              </select>
            </div>

            <div className="text-flex">
              <div className="text-input-flex">
                <div>Major</div>
                <input type="text" className="textbox-long" />
              </div>

              <div className="text-input-flex">
                <div>Create Username</div>
                <input type="text" className="textbox-long" />
              </div>

              <div className="text-input-flex">
                <div>Create Password</div>
                <input type="password" className="textbox-long" />
              </div>
            </div>

            <button type="button" className="button next-button" onClick={() => navigate("/user-setup")}>
              Next ⟶
            </button>
          </div>
        </div>
      </div>
    );

   }
   
   export default CreateUser;
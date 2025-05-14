import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultImage from "../assets/upload-image.png"
import EditIcon from "../assets/edit.svg"
import './CreateUserStyles.css'

function CreateUser() {
  const navigate = useNavigate();

  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  }

  const uploadImageDisplay = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setAvatarURL(cachedURL);
  }

    return (
      <div className="create-user-page">
        <div className="welcome-side">
          <div className="new-user">Welcome to BruinMart!</div>
          <div className="new-subtext">We are so happy to have you here!</div>
          <div className="avatar-upload-container">
            <div className="avatar-wrapper">
              <img
                src={avatarURL}
                alt="Avatar"
                className="avatar-img"
              />
              <button
                type="submit"
                onClick={handleImageUpload}
                className="edit-icon"
              >
                <img
                  src={EditIcon}
                  alt="Edit"
                  className="object-cover"
                />
              </button>
              <input
                type="file"
                id="file"
                ref={fileUploadRef}
                onChange={uploadImageDisplay}
                hidden
              />
            </div>
          </div>
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

            <div className="button-container">
              <button type="button" className="button-next-button" onClick={() => navigate("/user-setup")}>
                Next ⟶
              </button>
            </div>
          </div>
        </div>
      </div>
    );

   }
   
   export default CreateUser;
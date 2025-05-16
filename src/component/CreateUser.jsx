import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultImage from "../assets/upload-image.png"
import EditIcon from "../assets/edit.svg"
import './CreateUserStyles.css'

function CreateUser() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [classYear, setClassYear] = useState("");
  const [gender, setGender] = useState("");
  const [major, setMajor] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              <input type="text" className="textbox" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" className="textbox" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="select-text-flex">
              <div>Class of</div>
              <div>Gender</div>
            </div>

            <div className="select-flex">
              <select name="class-year" className="selectbox" value={classYear} onChange={(e) => setClassYear(e.target.value)}>
                <option value="">Please select one...</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>

              <select name="gender" className="selectbox" value={gender} onChange={(e) => setGender(e.target.value)}>
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
                <input type="text" className="textbox-long" value={major} onChange={(e) => setMajor(e.target.value)} />
              </div>

              <div className="text-input-flex">
                <div>Create Username</div>
                <input type="text" className="textbox-long" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="text-input-flex">
                <div>Create Password</div>
                <input type="password" className="textbox-long" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div className="button-container">
              <button
                type="button"
                className="button-next-button"
                onClick={() => {
                  localStorage.setItem("user", JSON.stringify({
                    avatar: avatarURL,
                    firstName,
                    lastName,
                    classYear,
                    gender,
                    major,
                    username,
                  }));
                  navigate("/user-setup");
                }}
              >
                Next ⟶
              </button>
            </div>
          </div>
        </div>
        <div className="image-credit-createUser">
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
    );

   }
   
   export default CreateUser;
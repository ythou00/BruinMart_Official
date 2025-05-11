import { useNavigate } from 'react-router-dom'
import './CreateUserStyles.css'

function CreateUser() {
  const handleSubmit = (event) => {};

  const navigate = useNavigate();

    return (
      <form onSubmit={{handleSubmit}}>

        <div className = "names-flex">
          <div>First Name</div>
          <div>Last Name</div>
        </div>

        <div className = "names-text-flex">
          <input type = "text" />
          <input type = "text"/>
        </div>

        <div className = "select-text-flex">
          <div>Class of</div>
          <div>Gender</div>
        </div>

        <div className = "select-flex">
          <select name = "class-year">
            <option value = "">Please select one...</option>
            <option value = "2024">2024</option>
            <option value = "2025">2025</option>
            <option value = "2026">2026</option>
            <option value = "2027">2027</option>
            <option value = "2028">2028</option>
            <option value = "2029">2029</option>
          </select>

          <select name = "gender">
            <option value = "">Please select one...</option>
            <option value = "Female">Female</option>
            <option value = "Male">Male</option>
            <option value = "Other">Other</option>
            <option value = "Prefer not to answer">Prefer not to answer</option>
          </select>
        </div>

        <div className = "text-flex">
          <div className = "text-input-flex">
            <div>Major</div>
            <input type = "text"/>
          </div>

          <div className = "text-input-flex">
            <div>Create Username</div>
            <input type = "text"/>
          </div>

          <div className = "text-input-flex">
            <div>Create Password</div>
            <input type = "password"/>
          </div>
        </div>

        <button type = "button" className = "button upload-button">Upload</button>

        <button type = "button"
          className = "button next-button"
          onClick = {() => navigate("/SelectInterests")}>
            Next    &gt;
        </button>
        
      </form>
    );
   }
   
   export default CreateUser;
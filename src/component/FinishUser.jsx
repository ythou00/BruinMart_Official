import { useNavigate } from 'react-router-dom'
import './FinishUserStyles.css'

function FinishUser() {
  const navigate = useNavigate();

  return (
    <>
      <div className = "congrats">Congrats! 🎉</div>
      <div className = "caption">You've successfully created your account!</div>
      <div className = "bear">🧸</div>

      <button type = "button" 
      className = "done"
      onClick = {() => navigate("/home")}>
        Done!
      </button>
    </>
  )
};
   
   export default FinishUser;
   
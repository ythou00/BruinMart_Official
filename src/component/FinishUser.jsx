import { useNavigate } from 'react-router-dom'
import './FinishUserStyles.css'

function FinishUser() {
  const navigate = useNavigate();

  return (
    <>
      <div className = "h1">Congrats! 🎉</div>
      <div className = "caption">You successfully created your account!</div>
      <div className = "bear">🧸</div>

      <button type = "button" 
      className = "finish"
      onClick = {() => navigate()}>
        Finish    &gt;
      </button>
    </>
  )
};
   
   export default FinishUser;
   
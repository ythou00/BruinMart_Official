import { useNavigate } from 'react-router-dom'
import './SelectInterestsStyles.css'
import {useState} from 'react'

function SelectInterests() {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);
  const [isClicked10, setIsClicked10] = useState(false);
  const [isClicked11, setIsClicked11] = useState(false);

  const markIsClicked = () => {
    setIsClicked(!isClicked);
  }
  const markIsClicked1 = () => {
    setIsClicked1(!isClicked1);
  }
  const markIsClicked2 = () => {
    setIsClicked2(!isClicked2);
  }
  const markIsClicked3 = () => { 
    setIsClicked3(!isClicked3); 
  }
  const markIsClicked4 = () => { 
    setIsClicked4(!isClicked4); 
  }
  const markIsClicked5 = () => { 
    setIsClicked5(!isClicked5); 
  }
  const markIsClicked6 = () => { 
    setIsClicked6(!isClicked6); 
  }
  const markIsClicked7 = () => { 
    setIsClicked7(!isClicked7); 
  }
  const markIsClicked8 = () => { 
    setIsClicked8(!isClicked8); 
  }
  const markIsClicked9 = () => { 
    setIsClicked9(!isClicked9); 
  }
  const markIsClicked10 = () => { 
    setIsClicked10(!isClicked10); 
  }
  const markIsClicked11 = () => { 
    setIsClicked11(!isClicked11); 
  }

  return (
    <div className="select-interests-page">
      <button type = "button"
        className = "revert-back"
        onClick = {() => navigate("/create-user")}>⟵ Back
      </button>
      <div className = "interest">Interests</div>
      <div className = "interest-caption">Please select some interests</div>

      <div className = "button-container">
        <div className = "container1">
          <button onClick = {markIsClicked} 
          className = {isClicked ? "interest-button one looking-for" : "interest-button one not-looking-for"}>
            Kitchen Supplies
          </button>
          <button onClick = {markIsClicked1} 
          className = {isClicked1 ? "interest-button one looking-for" : "interest-button one not-looking-for"}>
            Bathroom Supplies
          </button>
          <button onClick = {markIsClicked2} 
          className = {isClicked2 ? "interest-button one looking-for" : "interest-button one not-looking-for"}>
            Desk Organizer
          </button>
          <button onClick = {markIsClicked3} 
          className = {isClicked3 ? "interest-button one looking-for" : "interest-button one not-looking-for"}>
            Bed Frame
          </button>
        </div>

        <div className = "container2">
          <button onClick = {markIsClicked4} 
          className = {isClicked4 ? "interest-button two looking-for" : "interest-button two not-looking-for"}>
            Lamps
          </button>
          <button onClick = {markIsClicked5} 
          className = {isClicked5 ? "interest-button two looking-for" : "interest-button two not-looking-for"}>
            Chair
          </button>
          <button onClick = {markIsClicked6} 
          className = {isClicked6 ? "interest-button two looking-for" : "interest-button two not-looking-for"}>
            Desks
          </button>
          <button onClick = {markIsClicked7} 
          className = {isClicked7 ? "interest-button two looking-for" : "interest-button two not-looking-for"}>
            Mattresses
          </button>
        </div>

        <div className = "container3">
          <button onClick = {markIsClicked8} 
          className = {isClicked8 ? "interest-button three looking-for" : "interest-button three not-looking-for"}>
            Wall Clock
          </button>
          <button onClick = {markIsClicked9} 
          className = {isClicked9 ? "interest-button three looking-for" : "interest-button three not-looking-for"}>
            Monitor
          </button>
          <button onClick = {markIsClicked10} 
          className = {isClicked10 ? "interest-button three looking-for" : "interest-button three not-looking-for"}>
            Couch
          </button>
          <button onClick = {markIsClicked11} 
          className = {isClicked11 ? "interest-button three looking-for" : "interest-button three not-looking-for"}>
            Clothes Organizer
          </button>
        </div>
      </div>
      <button type = "button"
        className = "to-finish"
        onClick = {() => navigate("/setup-complete")}>Finish ⟶</button>

      <div className="image-credit-selectInterest">
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
   
   export default SelectInterests;
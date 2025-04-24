import './select-interests-styles.css'
import {useState} from 'react'

function select_interests() {
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

  const handleSubmit = (event) => {};

  return (
    <form onSubmit = {{handleSubmit}}>
      <div className = "interest">Interest</div>
      <div className = "caption">Select at least three interests</div>
      <button type = "button" className = "next">Next    &gt;</button>

      <div class = "container">
        <button onClick = {markIsClicked} className = {isClicked ? "looking-for" : ""}>Kitchen Supplies</button>
        <button onClick = {markIsClicked1} className = {isClicked1 ? "looking-for" : ""}>Bathroom Supplies</button>
        <button onClick = {markIsClicked2} className = {isClicked2 ? "looking-for" : ""}>Desk Organizer</button>
        <button onClick = {markIsClicked3} className = {isClicked3 ? "looking-for" : ""}>Bed Frame</button>
        <button onClick = {markIsClicked4} className = {isClicked4 ? "looking-for" : ""}>Lamps</button>
        <button onClick = {markIsClicked5} className = {isClicked5 ? "looking-for" : ""}>Chair</button>
        <button onClick = {markIsClicked6} className = {isClicked6 ? "looking-for" : ""}>Desks</button>
        <button onClick = {markIsClicked7} className = {isClicked7 ? "looking-for" : ""}>Mattresses</button>
        <button onClick = {markIsClicked8} className = {isClicked8 ? "looking-for" : ""}>Wall Clock</button>
        <button onClick = {markIsClicked9} className = {isClicked9 ? "looking-for" : ""}>Monitor</button>
        <button onClick = {markIsClicked10} className = {isClicked10 ? "looking-for" : ""}>Couch</button>
        <button onClick = {markIsClicked11} className = {isClicked11 ? "looking-for" : ""}>Clothes Organizer</button>
      </div>
    </form>
  );
}
   
   export default select_interests;
   
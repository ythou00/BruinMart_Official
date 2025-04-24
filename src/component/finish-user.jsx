import './component/finish-user-styles.css'
import {useState} from 'react'

function MovieCard() {
  const handleSubmit = (event) => {};

  return (
    <form onSubmit = {{handleSubmit}}>
      <div class = "h1">Congrats! 🎉</div>
      <div class = "caption">You successfully created your account!</div>
      <div class = "bear">🧸</div>

      <button type = "button" className = "finish">Finish    &gt;</button>
    </form>
  );
}
   
   export default MovieCard;
   
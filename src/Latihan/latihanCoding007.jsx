import React from "react";

import "./LatihanCoding007.css";

// don't change the Component name "App"
export default function LatihanCoding007() {
    const [enteredText, setEnteredText] = React.useState('Invalid')
    const inputChangeHandler = (event) =>{
        if(event.target.value.trim().length < 3){
            setEnteredText('Invalid')
        }else{
            setEnteredText('Valid')
        }
    }
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={inputChangeHandler} />
      <p>{enteredText} message</p>
    </form>
  );
}

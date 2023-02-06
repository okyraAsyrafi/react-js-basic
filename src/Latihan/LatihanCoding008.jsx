import React from 'react';

import './LatihanCoding008.css';

// don't change the Component name "App"
export default function LatihanCoding008() {
    const [enterIncrement, setEnteredIncrement] = React.useState(0);

    const clickHandler = (event) => {
      setEnteredIncrement((prevState) =>prevState+1)
    };
    return (
      <div>
        <p id="counter">{enterIncrement}</p>
        <button onClick={clickHandler}>Increment</button>
      </div>
    );
}

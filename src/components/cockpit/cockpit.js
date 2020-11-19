import React, { useEffect } from 'react';

const Cockpit = (props) => {

  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    return (()=>{
      console.log("[cockpit.js] cleaning useEffect");
    })
  }, []);

  const style = {
    backgroundColor: "lightgreen",
    font: "inherit",
    border: "1px solid darkgreen"
  }

  return (
    <div>
      <h1>React Complete Guide</h1>
      <button style={style} onClick={() => props.toggle(props.flag)}>SWITCH</button>

    </div>
  );
}

export default Cockpit;
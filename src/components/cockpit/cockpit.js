import React from 'react';

const cockpit = props => {

   const style={
      backgroundColor:"lightgreen",
      font:"inherit",
      border:"1px solid darkgreen"
    }

  return (
        <div>
          <h1>React Complete Guide</h1>
           <button style={style} onClick={()=>props.toggle(props.flag)}>SWITCH</button>
           {props.persons}
        </div>
  );
}

export default cockpit;
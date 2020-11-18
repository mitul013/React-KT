import React from 'react';
import './person.css';
const Person = (props) => {
return(
  <div className="person" >
  <p onClick={props.click}>My name is {props.name} and i am {props.age} years old</p>
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} />
  </div>
)
}

export default Person;
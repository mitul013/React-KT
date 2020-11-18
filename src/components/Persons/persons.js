import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  return props.persons.map( (el,index) => { 
      return (<Person
       name={el.name}
       age={el.age}
       click= {(index)=>props.click(index)}
       changed = {(event)=>props.changed(event,el.id)}
       key={index}
       />
      )
   })
}

export default persons
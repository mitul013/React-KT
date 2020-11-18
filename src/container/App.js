//import React,{ useState } from 'react';
import React from 'react';
import './App.css';
import Cockpit from '../components/cockpit/cockpit';
import Persons from '../components/Persons/persons';
// const App = props => {
  
//   let [personState,setPersonState] = useState({
//     persons: [
//       {name:"Mitul",age:23},
//       {name:"Yashpal",age:22}
//     ]
//   });

//   const switchName = () => {
//     setPersonState({
//       persons:[
//         {name:personState.persons[1].name,age:22},
//         {name:personState.persons[0].name,age:23}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>React Complete Guide</h1>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
//       <button onClick={switchName}>Switch</button>
//     </div>  
//   );
// }


class App extends React.Component{

  // state property

  state = {
    persons: [
      {id:1,name:"Mitul",age:23},
      {id:2,name:"Yashpal",age:22}
    ],
    personflag:false
  }

  switchNameHandler = (age) => {
    console.log("was clicked"+this.state.persons[0].name)

  //setState is used for update the state in class component

    // this.setState(
    //   {persons:[
    //     {name:this.state.persons[1].name,age:age},
    //     {name:this.state.persons[0].name,age:23}
    //   ]}
    // )
    //Don't do this --> this.state.persons[1].name="YASHPAL"
  }

  nameChange = (event,pid) => {
    
    const personIndex = this.state.persons.findIndex((p)=>p.id===pid)
    
    let newPersons = [...this.state.persons]

    newPersons[personIndex].name = event.target.value

    this.setState({
      persons:[...newPersons]
    })
  }

  togglePerson = (flag) => {
    console.log("FLAG -> ",flag);
    this.setState({
      personflag : !flag
    })
  }

   deletePerson = (index) => {
      const personsCopy = [...this.state.persons]
      // splice is used for adding or removing 
      personsCopy.splice(index,1);
      console.log(personsCopy)
      this.setState({persons:personsCopy})
    }

  render(){

   
    

   let persons = null;

    if(this.state.personflag){
      persons = (
        <Persons persons={this.state.persons}
          click={this.deletePerson}
          changed={this.nameChange}  />
       /* this.state.persons.map((el,index)=>{
          return <Person name={el.name} 
                  age={el.age} 
                  click={()=> this.deletePerson(index)}
                  key={el.id}
                  changed = {(event)=>this.nameChange(event,el.id)} />
       }
        )*/
          /*
           <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChange}/>

              <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
              click={()=>this.switchNameHandler(111)}>My hobbie: reading a book</Person> 
          </div> 
          */
        )
    }

     

    return(
        <div className="App">
           <Cockpit persons={persons} toggle={this.togglePerson}
           flag={this.state.personflag}
           />
        </div>
    )
  }
}


export default App;

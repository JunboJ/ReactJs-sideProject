import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from '../src/Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 25 },
      { name: 'Jess', age: 25 }
    ],
    otherState: 'something else'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Jess', age: 24 }
      ]
    })
  };

  inputNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'James', age: 25 },
        { name: event.target.value, age: 24 }
      ]
    })
  }

  render() {
    
    const styling = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>This is the i don't know which time of my tries.</h1>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'James!!!')}
        >My hobbies: Movie</Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => { this.switchNameHandler('Jess!') }}
          input={this.inputNameHandler}
        >My hobbies: Movie</Person>

        <button
          style={styling}
          onClick={() => { this.switchNameHandler('James!') }}>Switch name</button>
      </div>
    );
    // the code above will be converted to the code below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a react app'));
  }
}

export default App;




// const App = props => {
//   // useState: 
//   // The first parameter can be any value(object, array, string, etc)
//   // The second parameter which is a function will set state 
//   // like class base components' "setState", but instead it will replace
//   // the original state with the new state passed into its
//   // sencond parameter function's parameter
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'James', age: 26 },
//       { name: 'Jess', age: 24 }
//     ]
//   });

//   const [otherState, setOhterState] = useState({
//     otherState: 'something else'
//   });

//   console.log(personState, otherState)

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'Junbo', age: 25 },
//         { name: 'Jess', age: 24 }
//       ],
//       // otherState: personState.otherState
//     })
//   };

//   return (
//     <div className="App">
//       <h1>This is the i don't know which time of my tries.</h1>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} >My hobbies: Coding</Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} >My hobbies: Movie</Person>
//       <button onClick={switchNameHandler}>Switch name</button>
//     </div>
//   );
//   // the code above will be converted to the code below
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a react app'));
// }

// export default App;
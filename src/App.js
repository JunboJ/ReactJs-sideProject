import React, { Component } from 'react';
// import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from '../src/Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'James', age: 25 },
      { id: 'p2', name: 'Jess', age: 25 }
    ],
    otherState: 'something else',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Jess', age: 24 }
      ]
    })
  };

  deletePersonHandler = (pi) => {
    const persons = [...this.state.persons];
    persons.splice(pi, 1);
    this.setState({ persons: persons });
  };

  inputNameHandler = (event, id) => {
    const pi = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[pi] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[pi] = person;
    this.setState({
      persons: persons
    })
  };

  togglePersonsNamesHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  // react will excute render func when it decide to update views
  render() {

    const styling = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: 'auto 5px',
      ':hover': {
        backgroundColor: 'lightgreen',
        border: '2px solid lightblue'
      }
    };

    let persons = null;
    // condition check
    if (this.state.showPersons) {
      styling.backgroundColor = 'red';
      styling[':hover'] = {
        backgroundColor: 'grey'
      }
      persons =
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.switchNameHandler.bind(this, 'James!!!')}
                delete={() => { this.deletePersonHandler(index) }}
                key={person.id}
                input={(e) => { this.inputNameHandler(e, person.id) }}
              >My hobbies: Movie</Person>
            )
          })}
        </div>
    }

    const classes = [];
    if (this.state.persons.length === 2) {
      classes.push('full', 'bold');
    }
    if (this.state.persons.length < 2) {
      classes.push('available');
    }

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>This is  the i don't know which time of my tries.</p>

          <button
            style={styling}
            onClick={this.togglePersonsNamesHandler}
          >{`${this.state.showPersons ? 'Hide' : 'Show'}`} name</button>

          {persons}

          <button
            onClick={() => { this.switchNameHandler('James!') }}
          >Switch name</button>

        </div>
      </StyleRoot>
    );
    // the code above will be converted to the code below
    // return React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a react app'));
  }
}

export default Radium(App);




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
//       <p>This is the i don't know which time of my tries.</p>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} >My hobbies: Coding</Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} >My hobbies: Movie</Person>
//       <button onClick={switchNameHandler}>Switch name</button>
//     </div>
//   );
//   // the code above will be converted to the code below
//   // return React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a react app'));
// }

// export default App;
import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import style from './App.module.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';
import { tsImportEqualsDeclaration } from '@babel/types';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'James', age: 25 },
      { id: 'p2', name: 'Jess', age: 25 }
    ],
    otherState: 'something else',
    showPersons: false,
    cockPitShow: true
  }

  // Component lifycycle - creating
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

  toggleCockPit = () => {
    this.setState({ cockPitShow: !this.state.cockPitShow })
  }

  // react will excute render func when it decide to update views
  render() {
    console.log('[App.js] rendering');
    let persons = null;
    // condition check
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.switchNameHandler}
          inputing={this.inputNameHandler}
          deleting={this.deletePersonHandler}
        />
    }

    return (
      // <StyleRoot>
      <div className={`flex-container ${style.App}`}>
        <button onClick={this.toggleCockPit}>Toggle Cockpit</button>
        {
          this.state.cockPitShow ? 
          <CockPit
          personsLength={this.state.persons.length}
          title={this.props.pageTitle}
          persons={this.state.persons}
          clicked={this.togglePersonsNamesHandler}
          showPersons={this.state.showPersons}
          switching={this.switchNameHandler}
        /> : null
        }
        
        {persons}

      </div>
      // </StyleRoot>
    );
    // the code above will be converted to the code below
    // return React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a react app'));
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
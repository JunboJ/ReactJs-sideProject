import React, { Component } from 'react';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering');
        return this.props.persons.map((person, index) => {
            return (
                // key prop must be inside of the outter element which works with map()
                // <ErrorBoundary key={person.id}>
                <Person
                    name={person.name}
                    age={person.age}
                    click={this.props.clicked.bind(this, 'James!!!')}
                    delete={() => this.props.deleting(index)}
                    key={person.id}
                    input={(e) => this.props.inputing(e, person.id)}
                >My hobbies: Movie</Person>
                // </ErrorBoundary>
            )
        });
    }
};

export default Persons;
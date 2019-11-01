import React from 'react';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = props => props.persons.map((person, index) => {
    return (
        // key prop must be inside of the outter element which works with map()
        // <ErrorBoundary key={person.id}>
        <Person
            name={person.name}
            age={person.age}
            click={props.clicked.bind(this, 'James!!!')}
            delete={() => props.deleting(index)}
            key={person.id}
            input={(e) => props.inputing(e, person.id)}
        >My hobbies: Movie</Person>
        // </ErrorBoundary>
    )
});

export default persons;
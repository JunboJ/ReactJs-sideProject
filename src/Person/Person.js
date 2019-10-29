import React from 'react';
import './Person.css';

const person = props => {
    return (
        <div className="Person">
            <div className="personBtnSet">
                <button className="deletePerson_btn" onClick={props.delete}>&times;</button>
            </div>
            <p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.input} placeholder={props.name} />
        </div>
    )
};

export default person;
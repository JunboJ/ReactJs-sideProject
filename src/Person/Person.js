import React from 'react';
// import Radium from 'radium';
import style from './Person.module.css';

const person = props => {
    const err = Math.random();
    if (err > 0.7) {
        throw new Error('Something went wrong');
    }
    return (
        <div className={style.Person}>
            <div className={style.personBtnSet}>
                <button className={style.deletePerson_btn} onClick={props.delete}>&times;</button>
            </div>
            <p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.input} placeholder={props.name} />
        </div>
    )
};

export default person;
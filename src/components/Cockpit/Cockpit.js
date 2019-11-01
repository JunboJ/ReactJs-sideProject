import React from 'react';
import style from './Cockpit.module.css';

const cockpit = props => {

    let buttonStyle = style.Green;
    if (props.showPersons) {
        buttonStyle = style.Red;
    }
    
    const classes = [];
    if (props.persons.length === 2) {
      classes.push(style.bold, style.full);
    }
    if (props.persons.length < 2) {
      classes.push(style.available);
    }

    return (
        <div>
            <p className={classes.join(' ')}>This is  the i don't know which time of my tries.</p>
            <div className={style.break}></div>
            <button
                className={`${style.personCtrl} ${buttonStyle}`}
                onClick={props.clicked}
            >{`${props.showPersons ? 'Hide' : 'Show'}`} name</button>
            <div className={style.break}></div>
            <div className={style.break}></div>
            <button
                onClick={() => { props.switching('Jimmy') }}
            >Switch name</button>
        </div>
    );
};

export default cockpit;
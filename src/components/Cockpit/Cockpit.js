import React, { useEffect } from 'react';
import style from './Cockpit.module.css';

const Cockpit = props => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Changes have been saved');
        }, 1000)
    }, [props.persons]);


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
            <p className={classes.join(' ')}>{props.title}</p>
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

export default Cockpit;
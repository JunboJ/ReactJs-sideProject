import React, { useEffect, useRef, useContext } from 'react';
import style from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        toggleBtnRef.current.click();
        return () => {
        }
    }, [])


    let buttonStyle = style.Green;
    if (props.showPersons) {
        buttonStyle = style.Red;
    }

    const classes = [];
    if (props.personsLength === 3) {
        classes.push(style.bold, style.full);
    }
    if (props.personsLength < 3) {
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
                ref={toggleBtnRef}
            >Switch name</button>
            <button
                onClick={authContext.login}
            >{authContext.authenticated ? 'Sign off' : 'Sign in'}</button>
        </div>
    );
};

export default React.memo(Cockpit);
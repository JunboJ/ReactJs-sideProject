import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import style from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    inputElementRef = React.createRef();

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering');
        return (
            <div className={style.Person}>
                <div className={style.personBtnSet}>
                    <button className={style.deletePerson_btn} onClick={this.props.delete}>&times;</button>
                </div>
                <small>{this.context.authenticated ? 'Signed in!' : 'please sign in first.'}</small>
                <p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} years old.</p>
                <p onClick={this.props.click}>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.input}
                    placeholder={this.props.name}
                />
            </div>
        )
    }
};

Person.propTypes = {
    delete: PropTypes.func,
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    input: PropTypes.func
};

export default Person;
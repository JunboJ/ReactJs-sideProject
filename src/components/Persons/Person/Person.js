import React, { Component } from 'react';
// import Radium from 'radium';
import style from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering');
        return (
            <div className={style.Person}>
                <div className={style.personBtnSet}>
                    <button className={style.deletePerson_btn} onClick={this.props.delete}>&times;</button>
                </div>
                <p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} years old.</p>
                <p onClick={this.props.click}>{this.props.children}</p>
                <input type="text" onChange={this.props.input} placeholder={this.props.name} />
            </div>
        )
    }
};

export default Person;
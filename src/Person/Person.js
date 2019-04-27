import React from 'react';
import './Person.css';
import Aux from '../hoc/Aux';

const person = (props) => {
	return (
		<Aux className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>
	)
};

export default person;
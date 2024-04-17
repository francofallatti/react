import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({value})=> {

    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    return <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={handleAdd}>
            +1
        </button>
    </>;
}

CounterApp.prototype = {
    value : PropTypes.number.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    // HandelAdd
    const handelAdd = (e) => {
        console.log(e);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <button onClick = {handelAdd}>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
import React from 'react';

function Increment({ onIncrement }) {
    return <button className='increment' onClick={onIncrement} >Buy</button>;
}

export default Increment;
import React, { useState } from 'react';
import Decrement from './decrement';
import Increment from './increment';

function Counter() {
const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
};

const handleDecrement = () => {
    if (count > 0) {
    setCount(prevCount => prevCount - 1);
    }
};

return (
    <div className="buttons">
            <Decrement className={`decrement ${count > 0 ? 'active-sell' : ''}`} onDecrement={handleDecrement} />
            <h2>{count}</h2>
            <Increment onIncrement={handleIncrement} />
    </div>
);
}

export default Counter;
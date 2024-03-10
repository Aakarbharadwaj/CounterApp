import React from 'react'
import { useCounter } from '../context/CounterContext'

const CounterControls = () => {
    const { increment, decrement } = useCounter();
    return (

        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CounterControls
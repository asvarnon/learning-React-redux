import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Counter() {

    //can use this state in place of variable starting point, ex) use this instead of const counter = 0
    const [counter, setCounter] = useState(0)
    //above saying counter = 0,

    const [toggle, setToggle] = useState(false);
    // allows us to set a toggle as a class even

    const toggler = () => {
        //taking previous state and reversing it
        setToggle(prevState => !prevState);
    }

    const increment =() => {
        //use the given function setCounter to write out a function. prev refers to previous state.
        // the initial state is being passed as the argument for the starting point.
        setCounter(prevState => prevState+ 1);
    }
    const decrement = () => {
        setCounter(prevState => prevState -1);
    }




    return (
        <div className='counter'>
            <h1 className={toggle ? "active" : ""}>Hello</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>UP</button>
            <button onClick={decrement}>DOWN</button>
            <button onClick={toggler}>Toggle</button>
        </div>
    )
}

export default Counter;
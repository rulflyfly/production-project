import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    function handleClick() {
        setCounter(counter+1)
    }
  return (
    <>
    <div >{counter}</div>
    <button className={classes.btn} onClick={handleClick}>increment</button>
    </>
  )
}

export default Counter
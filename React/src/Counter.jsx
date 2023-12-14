import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue=0, difAmount=1 }) {

    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        console.log(`The current value of counter is: ${counter}`)
    }, [counter])

    function handleCounterIncrement(){
        setCounter(c => c+difAmount);
    }

    function handleCounterDecrement(){
        setCounter(c => c-difAmount);
    }

    function handleCounterReset(){
        setCounter(initialValue);
    }

    return (
        <>
            <CounterDisplay count={counter}/>
            <button onClick={handleCounterIncrement}>Increment the counter value by {difAmount}</button>
            <button onClick={handleCounterDecrement}>Decrement the counter value by {difAmount}</button>
            <button onClick={handleCounterReset}>Reset the counter value to {initialValue}</button>
        </>
    )
}
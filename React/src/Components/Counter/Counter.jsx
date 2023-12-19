import { useEffect, useState, useRef } from "react"
import { CounterDisplay } from "../CounterDisplay/CounterDisplay";

export function Counter({ initialValue=4, difAmount=2 }) {

    const [counter, setCounter] = useState(initialValue);
    const refChange = useRef(null);
    const dirChange = useRef(null);

    useEffect(() => {
        
        const changeDirection = counter > initialValue ? "up ⬆️" : counter < initialValue ? "down ⬇️" : "equal";
        
        if(refChange.current !== null){
            if(changeDirection != "equal" && dirChange.current !== changeDirection){
            console.log(`Change direction (relative to ${initialValue}): ${changeDirection}`)}
        }
        
        console.log(`Counter is: ${counter}`)
        console.log(`Ref is: ${refChange.current}`)
        
        refChange.current = counter
        dirChange.current = changeDirection

    }, [counter])

    const handleCounterIncrement = () => setCounter(c => c + difAmount)

    const handleCounterDecrement = () => setCounter(c => c - difAmount)
    
    const handleCounterReset = () => setCounter(initialValue)

    return (
        <>
            <CounterDisplay count={counter}/>
            <button onClick={handleCounterIncrement}>Increment the counter value by {difAmount}</button>
            <button onClick={handleCounterDecrement}>Decrement the counter value by {difAmount}</button>
            <button onClick={handleCounterReset}>Reset the counter value to {initialValue}</button>
        </>
    )
}
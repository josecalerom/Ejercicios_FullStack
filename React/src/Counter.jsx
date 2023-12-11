import { useState } from "react"

export function Counter({ initialValue=0, incrementAmount=1 }) {

    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement(){
        setCounter(c => c+incrementAmount);
    }

    return (
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment the counter value by {incrementAmount}</button>
        </>
    )
}

//Q: When calling "setter" function to increment the counter
//should the parameter be a function or an immediate value? Why?
//A: In this case both ways are ok to obtain the result we want, but it's bette to use a function as a parameter to really be sure we are using the fresher value of the -counter- in this case 
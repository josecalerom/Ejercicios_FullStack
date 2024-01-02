import { useState } from "react";

export default function useCounter(initialValue = 0 ){

    const [counter, setCounter] = useState(initialValue);

    const handleIncrementCounter = () => setCounter((c) => c + 1);
    const handleDecrementCounter = () => setCounter((c) => c - 1);
    const handleResetCounter = () => setCounter(initialValue);
    return {
        counter: counter,
        onIncrement: handleIncrementCounter,
        onDecrement: handleDecrementCounter,
        onReset: handleResetCounter,
    }
}
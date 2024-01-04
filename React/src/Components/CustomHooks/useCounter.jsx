import { useState, useCallback } from "react";

export default function useCounter(initialValue = 0 ){

    const [counter, setCounter] = useState(initialValue);

    const handleIncrementCounter = useCallback(
        () => setCounter(counter + 1),
        [counter],
      );
    const handleDecrementCounter = useCallback(
        () => setCounter(counter - 1),
        [counter],
      );
    const handleResetCounter = useCallback(
        () => setCounter(initialValue),
        [initialValue],
      );

    return {
        counter: counter,
        onIncrement: handleIncrementCounter,
        onDecrement: handleDecrementCounter,
        onReset: handleResetCounter,
    }
}
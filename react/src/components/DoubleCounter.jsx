import { useState, useMemo } from "react";

function DoubleCounter() {
    const [count, setCount] = useState(0);

    // Derived state
    const doubleCount = useMemo(() => count * 2, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Double Count: {doubleCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default DoubleCounter;

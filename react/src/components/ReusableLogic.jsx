import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return { count, increment };
}

function ExampleComponent() {
    const { count, increment } = useCounter();

    return <button onClick={increment}>Count: {count}</button>;
}

export default ExampleComponent;

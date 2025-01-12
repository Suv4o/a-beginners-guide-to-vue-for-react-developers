import { useState, useEffect } from "react";

function ExampleComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

export default ExampleComponent;

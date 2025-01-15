import { useState } from "react";

function TwoWayBindingExample() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input value={inputValue} onChange={handleChange} placeholder="Type something..." />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default TwoWayBindingExample;

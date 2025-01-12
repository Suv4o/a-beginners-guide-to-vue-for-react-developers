function Child({ onClick }) {
    return <button onClick={onClick}>Click me</button>;
}

function ExampleComponent() {
    const handleClick = () => console.log("Button clicked!");
    return <Child onClick={handleClick} />;
}

export default ExampleComponent;

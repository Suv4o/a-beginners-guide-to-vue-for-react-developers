function Child(props) {
    return <h1>{props.message}</h1>;
}

function Parent() {
    return <Child message="Hello from Parent!" />;
}

export default Parent;

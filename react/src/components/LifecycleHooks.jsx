import { useEffect } from "react";

function ExampleComponent() {
    useEffect(() => {
        console.log("Component mounted");

        return () => {
            console.log("Component unmounted");
        };
    }, []);

    return <div>Lifecycle example</div>;
}

export default ExampleComponent;

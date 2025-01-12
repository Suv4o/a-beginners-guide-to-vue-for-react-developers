function Modal({ children }) {
    return <div className="modal">{children}</div>;
}

function ExampleComponent() {
    return (
        <Modal>
            <h1>Modal Content</h1>
        </Modal>
    );
}

export default ExampleComponent;

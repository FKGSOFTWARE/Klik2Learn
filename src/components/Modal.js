function Modal (props) {

    function cancelHandler() {
        props.onCancel()
    }
    
    return (
        <div className = "modal">
            <h3>Congratulations!</h3>
            <p>You have successfully matched all the numbers</p>
            <button className = "btn btn--alt" onClick = {cancelHandler}>Close</button>
        </div>
    );
}

export default Modal
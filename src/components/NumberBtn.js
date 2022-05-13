import { useState } from "react"
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default NumberBtn;

function NumberBtn(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function modalHandler() {
        setModalIsOpen(true)
    }
    function closeModalHandler () {
        setModalIsOpen(false)
    }

    return (
        <div>
            <div classsName = "actions">
                <button className = "numberBtn" onClick={modalHandler}>{props.text}</button>
            </div>
            { }
            { modalIsOpen && <Modal onCancel = {closeModalHandler}/> }
            { modalIsOpen && <Backdrop  onClick = {closeModalHandler}/> }
        </div>
    )
}
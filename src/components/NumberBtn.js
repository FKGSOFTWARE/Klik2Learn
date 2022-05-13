import { useState } from "react"
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Button from "./Button";

export default NumberBtn;

function NumberBtn(props) {
    // const [ btnNotClicked, btnClicked] = useState (false);
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function modalHandler() {
        setModalIsOpen(true)
    }
    function closeModalHandler () {
        setModalIsOpen(false)
    }
    // function btnClickedHandler() {
    //     btnClicked(true)
    // }
    // function btnNotClickedHandler () {
    //     btnClicked(false)
    // }

//     return (
//         <div>
//             <div classsName = "actions">
//                 <button className = "numberBtn" onClick={btnClickedHandler}>{props.text}</button>
//             </div>
//             { btnNotClicked && <Button onClick = {btnNotClickedHandler}/> }
//             {/* { modalIsOpen && <Backdrop  onClick = {btnNotClickedHandler}/> } */}
//         </div>
//     )
// }

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

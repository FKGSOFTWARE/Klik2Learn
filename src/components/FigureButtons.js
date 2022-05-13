import styled from "styled-components";
import { useState } from "react";

const theme = {
    white: {
        default: "white",
        hover: "#619b5c",
        disabled: "#619b5c"
    }
}

const Button = styled.button`
border: none;
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
transition-duration: 0.4s;
cursor: pointer;
border-radius: 8px;
background-color: ${props => theme[props.theme].default};
color: black;
border: 2px solid #555555;
transition: ease background-color 250ms;
&:hover{
    background-color: ${props => theme[props.theme].hover};
    border-color: #4d7a49;
}
&:disabled{
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${props => theme[props.theme].disabled};
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 8px;
    border: 2px solid #555555;
}
}
`

Button.defaultProps = {
    theme:"white"
}

//Arrsy of numbers to choose from
const figures = [ "0", "1", "2", "3", "4", "5", "6"];
// const figures = ["3","4","2","5","1"];


//Chooses 5 of the list to show
var newFigures = figures.sort(()=> Math.random() - Math.random()).slice(0, 5)

//Toggle on Click style
const ButtonToggle = styled(Button)`
opacity: 1;
background-colour: ${props => theme[props.theme].default};
${({ active }) =>
    active &&
    `
    opacity: 0.7;
    background-color: #619b5c;
    border-color: #ade6b7;
    `}
`


//Toggle functionality
function NumberToggleGroup() {
    const [active, setActive] = useState(newFigures[6]);
    return <div>
        {newFigures.map((number) => (
            <ButtonToggle
                active = {active === number}
                onClick = {() => setActive(number)}
                >{number}
            </ButtonToggle>
        ))}
    </div>
}

export default NumberToggleGroup
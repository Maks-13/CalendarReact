import { Fragment, useState } from "react"
import styled from 'styled-components';
import PopUp from "./PopUp/PopUp";
import GrayMiddleBlock from "./GrayMiddleBlock/GrayMiddleBlock";

const Plus = styled.a`

        display:inline-block;
        position: absolute;
        top: 10px;
        right: 0px;
        width: 30px;
        height: 30px;
        &:hover{
            cursor: pointer;
        }
    
        background:
          linear-gradient(red,red),
          linear-gradient(red,red);
        background-position:center;
        background-size: 50% 2px,2px 50%; 
        background-repeat:no-repeat;

`
const InterviewText = styled.div`
    position: absolute;
    top: 14px;
    left: 0px;
`

const GeneralBlock = styled.div`
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: white;

@media screen and (min-width: 741px) {
    margin: auto;
    width: 740px;
    }

@media screen and (max-width: 740px) {
    position: absolute;
    top: 0;
    height: 5vw;
    }

`
const Header = (props) => {

    let counter = 0;

    let arrOfValues = [];

    let arrOfKeys = [];

    for (let [key, value] of Object.entries(props.arr2)) {
        arrOfValues[counter] = value;
        arrOfKeys[counter] = key;
        counter++;
    }

    const [value, setValue] = useState(false);

    const onClickHandler = (value = true) => {
        setValue(value);
    }

    return (
        <Fragment>
            <GeneralBlock>
                <InterviewText>
                    Interview Calendar
                </InterviewText>
                <Plus onClick={onClickHandler}>
                </Plus>
            </GeneralBlock>
            <GrayMiddleBlock arrWithKeys={arrOfKeys} arrWithValues={arrOfValues}></GrayMiddleBlock>
            {value && <PopUp func={onClickHandler}></PopUp>}
        </Fragment >
    )

}

export default Header;
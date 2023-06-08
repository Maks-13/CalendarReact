import { Fragment } from 'react';
import styled from 'styled-components';

const BlockFooter = styled.div`
    position: fixed;
    width: 100%;
    height: 50px;
    top: 672px;
    background-color: #eee;

    @media screen and (min-width: 740px){
    margin: auto;
    width: 740px;
    }

    @media screen and (max-width: 740px){
    position: absolute;
    height: 20px;
    top: 170vw;
    }

`
const EmptyDiv = styled.div`
    position: relative;
    top: 1215px;
    height: 50px; 

    @media screen and (max-width: 740px){
    display: none;
    } 
`

const Text = styled.div`
    position: absolute;
    top: 15px;
    color: red;
    left: 35px;

    @media screen and (max-width: 740px){
    top: 5px;
    left: 23px;
    font-size: 8px;
    } 
`
const Delete = styled.div`
    position: absolute;
    right: 35px;
    top: 15px;
    color: red;

    @media screen and (max-width: 740px){
    top: 5px;
    right: 23px;
    font-size: 8px;
    } 

    &:hover{
        cursor: pointer;
    }
`
const Footer = (props) => {

    return (
        <Fragment>
            <EmptyDiv>
            </EmptyDiv>
            <BlockFooter>
                <Text>Today</Text>
                {props.delete && <Delete>Delete</Delete>}
            </BlockFooter>
        </Fragment>
    )
}


export default Footer;
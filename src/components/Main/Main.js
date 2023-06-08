import React, { Fragment, useState } from 'react';
import styled from 'styled-components';


const Main = (props) => {

    const [id, setId] = useState({});

    const ChessBoard = styled.div`
    display: grid;
    position: absolute;
    right: 0px;
    grid-gap: 1px;
    background-color: #eee;
    top: 150px;
    

    @media screen and (min-width: 741px) {
        grid-template-columns: repeat(15, 45px);
        grid-template-rows: repeat(23, 45px); 
   }   

   @media screen and (max-width: 740px){
    top: 33vw;
    grid-template-columns: repeat(15, 5.5vw);
    grid-template-rows: repeat(23, 5.5vw);
   }
`
    const Row = styled.div`
    background-color: white;

    &:hover{
        background-color: rgb(164, 177, 224);
        cursor: pointer;
    }
`
    const Time = styled.div`
    position: absolute;
    display: inline-flex;
    flex-direction: column; 
    left: 10px;
    top: 150px; 
    
    @media screen and (max-width: 740px){
        top: 32.8vw;
    }
`
    const Hour = styled.div`
    position: relative;

    &:nth-child(2){
        top: 20px;
    }
    &:nth-child(3){
        top: 50px;
    }
    &:nth-child(4){
        top: 80px;
    }
    &:nth-child(5){
        top: 110px;
    }
    &:nth-child(6){
        top: 140px;
    }
    &:nth-child(7){
        top: 170px;
    }
    &:nth-child(8){
        top: 200px;
    }
    &:nth-child(9){
        top: 230px;
    }
    &:nth-child(10){
        top: 260px;
    }
    &:nth-child(11){
        top: 290px;
    }
    &:nth-child(12){
        top: 320px;
    }
    &:nth-child(13){
        top: 350px;
    }
    &:nth-child(14){
        top: 380px;
    }
    &:nth-child(15){
        top: 410px;
    }
    &:nth-child(16){
        top: 440px;
    }
    &:nth-child(17){
        top: 470px;
    }
    &:nth-child(18){
        top: 500px;
    }
    &:nth-child(19){
        top: 530px;
    }
    &:nth-child(20){
        top: 560px;
    }
    &:nth-child(21){
        top: 590px;
    }
    &:nth-child(22){
        top: 620px;
    }
    &:nth-child(23){
        top: 650px;
    }
    &:nth-child(24){
        top: 680px;
    }

    @media screen and (max-width: 740px){

    font-size: 8px;

    &:nth-child(2){
        top: 9px;
    }
    &:nth-child(3){
        top: 21px;
    }
    &:nth-child(4){
        top: 36px;
    }
    &:nth-child(5){
        top: 49px;
    }
    &:nth-child(6){
        top: 60px;
    }
    &:nth-child(7){
        top: 77px;
    }
    &:nth-child(8){
        top: 89px;
    }
    &:nth-child(9){
        top: 103px;
    }
    &:nth-child(10){
        top: 116px;
    }
    &:nth-child(11){
        top: 126px;
    }
    &:nth-child(12){
        top: 136px;
    }
    &:nth-child(13){
        top: 146px;
    }
    &:nth-child(14){
        top: 156px;
    }
    &:nth-child(15){
        top: 166px;
    }
    &:nth-child(16){
        top: 176px;
    }
    &:nth-child(17){
        top: 186px;
    }
    &:nth-child(18){
        top: 196px;
    }
    &:nth-child(19){
        top: 206px;
    }
    &:nth-child(20){
        top: 216px;
    }
    &:nth-child(21){
        top: 226px;
    }
    &:nth-child(22){
        top: 236px;
    }
    &:nth-child(23){
        top: 246px;
    }
    &:nth-child(24){
        top: 256px;
    }

    }
    
`
    const onClickHandler = (e) => {
        setId(value => {
            for (let [key, numb] of Object.entries(value)) {
                if (key == e.target.id && numb == false) {
                    return (
                        {
                            ...value,
                            [e.target.id]: true
                        }
                    )
                }
            }
            return (
                {
                    ...value,
                    [e.target.id]: false
                }
            );
        });

        props.handler(true);
    }

    let counter = 0;

    let z = 0;

    let arrOfRows = [];

    let arrOfHours = [];

    let date = new Date();

    let hour = 0;


    for (let j = 0; j < 23; j++) {
        for (let i = 0; i < 15; i++) {
            if (Object.keys(id).length === 0) {
                arrOfRows[z] = <Row onClick={onClickHandler} key={counter} id={counter} />;
            }
            else {
                for (let [key, value] of Object.entries(id)) {
                    if (counter == key && value == false) {
                        arrOfRows[z] = <Row style={{ backgroundColor: 'rgb(164, 177, 224)' }} onClick={onClickHandler} key={counter} id={counter} />;
                        break;
                    } else if (counter == key && value == true) {
                        arrOfRows[z] = <Row onClick={onClickHandler} key={counter} id={counter} />;
                    } else {
                        arrOfRows[z] = <Row onClick={onClickHandler} key={counter} id={counter} />;
                    }
                }
            }
            counter++;
            z++;
        }

    }


    for (let i = 0; i <= 23; i++) {

        if (i == 0) {
            date.setHours(0);
            arrOfHours[i] = <Hour key={counter++}>{date.getHours()}:00</Hour>
        } else if (i < 10) {
            hour += date.getHours() + 1;
            arrOfHours[i] = <Hour key={counter++}>0{hour}:00</Hour>
        } else {
            hour += date.getHours() + 1;
            arrOfHours[i] = <Hour key={counter++}>{hour}:00</Hour>
        }
    }

    return (
        <Fragment>
            <Time>
                {arrOfHours.map(hour => {
                    return hour;
                })}
            </Time>
            <ChessBoard>
                {arrOfRows.map(value => {
                    return value;
                })}
            </ChessBoard>
        </Fragment>
    );
};


export default Main;
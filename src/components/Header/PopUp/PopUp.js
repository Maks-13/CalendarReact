
import styled from 'styled-components';

const PopUpMain = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(7, 2, 2, 0.703);
    top: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
`;

const PopUpArea = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const PopUpBody = styled.div`
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.8s ease 0s;
 
`

const PopUpContent = styled.div`
    position: relative;
    width: 18vw;
    height: 10vw;
    max-width: 800px;
    min-width: 345.6px;
    min-height: 192px;
    padding: 20px 20px; 
    opacity: 1;
    background: #eee;
    border-radius: 20px;

    @media screen and (max-width: 740px){
      width: 5vw;
      height: 5vw;
      min-width: 130px;
      min-height: 110px;
    }
  
    @media screen and (min-width: 741px){
      width: 17vw;
      height: 10vw;
      min-width: 130px;
      min-height: 110px;
    }
`
const Title = styled.div`
    position: absolute;
    left: 0;
    right: 0; 
    text-align: center;
    top: 10px;
    font-weight: bold;

    @media screen and (max-width: 740px){
      font-size: 14px;
    } 

`
const EventTime = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    text-align: center;

    @media screen and (max-width: 740px){
      font-size: 12px;
    } 
`
const Example = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    text-align: center;

    @media screen and (max-width: 740px){
      font-size: 12px;
    } 
`
const Input = styled.input`
    position: absolute;
    top: 90px;
    left: 10px;
    right: 10px;
    caret-color: rgb(64, 127, 255);;
    outline: none;

    @media screen and (max-width: 740px){
        top: 75px;
    } 
`

const HorizontalLine = styled.div`
    position: absolute;
    border-top: 1px solid gray;
    bottom: 6vh;
    left: 0;
    right: 0; 

    @media screen and (max-width: 740px){
        bottom: 4vh;
    } 
`

const VerticalLine = styled.div`
    position: relative;
    bottom: 0px;
    border-left: 1px solid gray;
    height: 6vh;
    position:absolute;
    left: 50%; 

    @media screen and (max-width: 740px){
        height: 4vh;
    } 
`
const ButtonCancel = styled.a`
    position: absolute;
    color: rgb(64, 127, 255);
    font-weight: bolder;
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 740px){
        bottom: 1.5vw;
    } 

    @media screen and (min-width: 741px){
        left: 50px;
        bottom: 15.63px;
    } 

`
const ButtonOk = styled.a`
    position: absolute;
    color: rgb(64, 127, 255);
    font-weight: bolder;
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 740px){
        bottom: 1.5vw;
        right: 30px;
    } 

    @media screen and (min-width: 741px){
        right: 70px;
        bottom: 15.63px;
    } 
`

const PopUp = (props) => {


    return (
        <PopUpMain>
            <PopUpArea>
                <PopUpBody>
                    <PopUpContent>
                        <Title>
                            {window.location.href}
                        </Title>
                        <EventTime>Enter event time:</EventTime>
                        <Example>YYYY-MM-DD hh:mm:ss</Example>
                        <Input></Input>
                        <HorizontalLine></HorizontalLine>
                        <VerticalLine></VerticalLine>
                        <ButtonCancel onClick={() => { props.func(false) }}>Cancel</ButtonCancel>
                        <ButtonOk onClick={() => { props.func(false) }}>OK</ButtonOk>
                    </PopUpContent>
                </PopUpBody>
            </PopUpArea >
        </PopUpMain >
    )
}

export default PopUp;
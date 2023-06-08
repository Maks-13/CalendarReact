import styled from 'styled-components';

const MainBlock = styled.div`
    position: fixed;
    background-color: #eee;
    top: 50px;
    width: 100%;
    height: 100px;

    @media screen and (min-width: 741px){
    margin: auto;
    width: 740px;
    }

    @media screen and (max-width: 740px) {
    position: absolute;
    top: 16vw;
    height: 17vw;

    }

`
const FirstInnerBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 10px;
  left: 20%;
  height: 30px;
  width: 80%;
  

  @media screen and (max-width: 740px){
    position: absolute;
    font-size: 8px;
    height: 1.95vw;
  }

  
`
const DayOfWeek = styled.div`
    position: relative;
    top: 10px;
    z-index: 1;

    @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }
`
const Monday = styled.div`
    position: relative;
    top: 10px;
    right: 6px;
    z-index: 1;

    @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }

`
const Tuesday = styled.div`
    position: relative;
    top: 10px;
    right: 5px;
    z-index: 1;

    @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }

`
const Wednesday = styled.div`
    position: relative;
    top: 10px;
    right: 5px;
    z-index: 1;

    @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }

`
const Thursday = styled.div`
    position: relative;
    top: 10px;
    right: 5px;
    z-index: 1;
    
    @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }

`

const Friday = styled.div`
    position: relative;
    top: 10px;
    right: 2px;
    z-index: 1;

    @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }

`
const Sunday = styled.div`
     position: relative;
     top: 10px;
     left: 2px;
     z-index: 1;

     @media screen and (max-width: 740px){
    position: relative;
    top: 1.536vw;
  }
  
`
const SecondInnerBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  left: 20%;
  height: 30px;
  width: 80%; 

  @media screen and (max-width: 740px){
    position: absolute;
    top: 3.9vw;
    height: 3.9vw;
  }
`

const Day = styled.div`
  position: absolute;
  left: 1px;
`

const DayOfWeekNumber = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  top: 7.5px;
  border-radius: 20px;
  z-index: 1;

&:hover ${Day}{
    color: white;
}

&:hover{
    background-color: red;
    cursor: pointer;
}

@media screen and (max-width: 740px){
    top: 2.048vw;
  }

`

const ThirdInnerBlock = styled.div`
    position: relative;
    margin-left: 20%;
    height: 40px;
    width: 80%; 
  

   @media screen and (max-width: 740px){
    position: absolute;
    top: 8vw;
  }
`

const ArrowLeftBlock = styled.div`
    position: absolute;
    top: 8px;
    left: 3%;
    width: 24px;
    height: 24px;
    
    &:hover{
        cursor: pointer;
    }

`

const ArrowLeftTop = styled.div`
    position: absolute;
    background: red;
    height: 12px;
    right: 6px;
    top: 4px;
    width: 2px;
    transform: rotate(45deg);
    transform-origin: top left;

    @media screen and (max-width: 740px){
    width: 0.9px;
    height: 8px;
    top: 6px;
    right: 8px;
    }

`

const ArrowLeftBottom = styled.div`
    position: absolute;
    background: red;
    height: 12px;
    right: 6px;
    bottom: 2.5px;
    width: 2px;
    transform: rotate(-45deg);
    transform-origin: bottom left;

    @media screen and (max-width: 740px){
        width: 0.9px;
        height: 8px;
        bottom: 6.5px;
        right: 8px;
    }
`

const DayAndMonth = styled.div`
    position: relative;
    width: 100%;
    top: 12px;
    text-align: center;
    @media screen and (max-width: 740px){
        top: 16px;
        font-size: 8px;
    }
`
const ArrowRightBlock = styled.div`
    position: absolute;
    top: 8px;
    right: 3%;
    width: 24px;
    height: 24px;

    &:hover{
        cursor: pointer;
    }

`

const ArrowRightTop = styled.div`
    position: absolute;
    background: red;
    height: 12px;
    left: 6px;
    top: 4px;
    width: 2px;
    transform: rotate(-45deg);
    transform-origin: top right;

@media screen and (max-width: 740px){
    width: 0.9px;
    height: 8px;
    top: 6px;
    right: 8px;
}
`
const ArrowRightBottom = styled.div`
    position: absolute;
    background: red;
    height: 12px;
    left: 6px;
    bottom: 2.5px;
    width: 2px;
    transform: rotate(45deg);
    transform-origin: bottom right;

@media screen and (max-width: 740px){
    width: 0.9px;
    height: 8px;
    bottom: 6.5px;
    right: 8px;
}
`

const GrayMiddleBlock = (props) => {

    let counter = 0;

    return (
        <MainBlock>
            <FirstInnerBlock>
                <Monday>M</Monday>
                <Tuesday>T</Tuesday>
                <Wednesday>W</Wednesday>
                <Thursday>T</Thursday>
                <Friday>F</Friday>
                <DayOfWeek>S</DayOfWeek>
                <Sunday>S</Sunday>
            </FirstInnerBlock>
            <SecondInnerBlock>
                {props.arrWithValues.map((day) => {
                    return (
                        <DayOfWeekNumber key={props.arrWithKeys[counter++]}>
                            <Day>
                                {day}
                            </Day>
                        </DayOfWeekNumber>
                    )
                })}
            </SecondInnerBlock>
            <ThirdInnerBlock>
                <DayAndMonth>March 2019</DayAndMonth>
                <ArrowLeftBlock>
                    <ArrowLeftTop />
                    <ArrowLeftBottom />
                </ArrowLeftBlock>
                <ArrowRightBlock>
                    <ArrowRightTop />
                    <ArrowRightBottom />
                </ArrowRightBlock>
            </ThirdInnerBlock>
        </MainBlock>
    )

}

export default GrayMiddleBlock;
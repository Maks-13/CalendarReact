import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';

const BigBlock = styled.div`
  position: relative;
  height: 100%;

  @media screen and (min-width: 741px){
    margin: auto;
    width: 740px;
  }

  @media screen and (max-width: 740px){
    width: 100%;
  }

`

function App() {

  const [value, setValue] = useState(false);



  const objOfNumberDays = {
    1: 25,
    2: 26,
    3: 27,
    4: 28,
    5: 29,
    6: 30,
    7: 31
  };

  const onClickHandler = (value) => {
    setValue(value);
  }


  return (
    <BigBlock>
      <Main handler={onClickHandler}></Main>
      <Header arr2={objOfNumberDays}></Header >
      <Footer delete={value}></Footer>
    </BigBlock >

  );
}

export default App;

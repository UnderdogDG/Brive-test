import { createGlobalStyle } from 'styled-components';

const MainStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
  }

  div{
    box-sizing: border-box;
  }

  #root{
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
` ;

export default MainStyle;
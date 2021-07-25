import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }
  *{
    box-sizing: border-box; 
  }
  figure{
    margin: 0;
  }
  figcaption{
    margin: 0;
  }
`

export const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    padding: 0 80px;
    align-items: center;
    justify-content: space-around;
`;
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Code';
    src: local('../../assets/fonts/CodeDemo-Light'),
    url('../../assets/fonts/CodeDemo-Light') format('otf'),
    font-weight: 400;
    font-style: normal;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Poppins;
},

`

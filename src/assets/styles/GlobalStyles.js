import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Kumbh Sans', sans-serif;
    }

    #root{
        position: relative;
        width: 100%;
        height: 100vh;
    }
`;

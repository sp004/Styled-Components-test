import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.colors.body};
    }

    p{
        line-height: 1.5;
    }
`

export default GlobalStyles
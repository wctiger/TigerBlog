import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%; /*10px*/
    }

    body {
        box-sizing: border-box;  
        color: ${(props: any) => props.theme.palette.text.primary};
        background-color: ${props => props.theme.palette.background.default};
        font-family: "Lato", sans-serif;
        font-weight: 400;
        line-height: 1.5;        
    }

    p {
        font-size: 1.6rem;
    }

    ::selection {
        background-color: ${props => props.theme.palette.primary.light};
        color: ${props => props.theme.palette.primary.contrastText}
    }
`;

export default GlobalStyle;

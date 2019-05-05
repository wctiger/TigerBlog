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

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.4rem;
    }

    h3 {
        font-size: 2.2rem;
    }

    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1.8rem;
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

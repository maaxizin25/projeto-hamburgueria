import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Roboto', sans-serif;
    }
    *:focus {
    outline: none;
}
    :root{
--color-primary: #27AE60;
--color-primary-50: #93D7AF;
--color-secundary: #EB5757;

--gray-100: #333333;
--gray-50: #828282;
--gray-20: #E0E0E0;
--gray-0: #F5F5F5;
--negative: #E60000;
--warning: #FFCD07;
--sucess: #168821;
--information: #155BCB;
}
`;

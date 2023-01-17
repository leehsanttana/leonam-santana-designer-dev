import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    font-family: 'Work Sans', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    
  }

  body{
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.neutral.blue};

    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.desktop.heading01};
    }

    p, button, label, input {
      font-size: ${({ theme }) => theme.typography.fontSize.desktop.body};
    }
  }
`;

export default GlobalStyle;

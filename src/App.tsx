import styled, { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Hello World!</h1>
      </ThemeProvider>
    </>
  );
};

export default App;

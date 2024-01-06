import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .root {
    height: 100vh;
    width: 100vw;
  }

  .button-no-style {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-rendering: inherit;
    letter-spacing: inherit;
    word-spacing: inherit;
    text-indent: inherit;
    text-shadow: inherit;
    text-align: inherit;
  }
`;

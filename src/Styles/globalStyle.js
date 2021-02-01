import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    
    &:focus {
      outline: none;
    }
  }
  body {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }
  ul,
  ol {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
    color: currentColor;
  }
`;

export default GlobalStyle;

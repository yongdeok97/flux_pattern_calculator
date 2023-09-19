import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ul,
  li {
      list-style: none;
      margin: 0;
      padding: 0;
  }

  button {
      background: inherit;
      border: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      overflow: visible;
  }

  .a11y-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
  }

  button {
      border-radius: 50%;
      box-shadow: 3px 2px 0 rgb(116, 114, 114);
      height: 80px;
      border: 8px solid rgba(0, 0, 0, 0.2);
      font-size: 20px;
      font-weight: bold;
  }
  button:active {
      box-shadow: none;
  }
`;

export default GlobalStyle;

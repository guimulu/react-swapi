import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import background from '../assets/background.jpg';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #363537;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    background-image: url(${background});
  }
`;

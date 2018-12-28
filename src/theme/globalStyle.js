import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
 
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box
  }
  section {
    padding-top: 60px
  }
  .row {
    width: 95%;
    max-width: 1020px;
    margin: 0 auto;
  }
  //buttons at modals within portfolio section
  .btn {
    background-color: transparent;
    box-shadow: 0 0 transparent;
    color: black;
    text-transform: none;
    height: 280px;
    width: 340px;
    margin-bottom: 30px
  }
  .btn:hover {
    background-color: transparent;
    box-shadow: 0 0 transparent;
  }

  //Modals custom styling
  .modal {
    max-height: 75%;
    width: 35%;
    padding: 0 20px;
  }
  .modal-close {
    height: 30px;
    text-align: right;
  }
`;
export default GlobalStyle;

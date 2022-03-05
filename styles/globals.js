import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.main};
     padding-bottom: 1.2rem;
    /* font-family: ${props => props.theme.fonts.title}; */
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .errorMsgWrapper{
  display: flex;
  flex-direction: column;
}

.errorMsg{
  padding: 8px auto;
  color: #ad0909;
  font-size: 1rem;
  font-style: bold;
  /* align-items: center; */
  align-self: center;
  /* justify-self: center; */
  /* justify-content: center; */

}

.btn{
  padding: 8px 14px;
   background-color:  ${props => props.theme.colors.background2};
  color: white;
  border-style: none;
  border-radius: 10px;
  font-size: 1.8rem;
}
.btnClose{
  padding: 8px 14px;
  background-color: #ad0909;
  color: white;
  border-style: none;
  border-radius: 10px;
  font-size: 1.8rem;
}

.btn:hover{
  padding: 8px 18px;
   background-color: white;
  color:  ${props => props.theme.colors.background2};
  border-style: solid;
  border-radius: 5px;
  font-size: 1.8rem;
  border-width: 1px;
  border-color:  ${props => props.theme.colors.background2};
}
.btnClose:hover{
  padding: 8px 18px;
   background-color: white;
  color: #ad0909;
  border-style: solid;
  border-radius: 5px;
  font-size: 1.8rem;
  border-width: 1px;
  border-color: #ad0909;
}

`;

export default GlobalStyles;
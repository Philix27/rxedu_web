import styled from 'styled-components'


export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 10px;
  padding: 20px 50px;
  justify-content: center;
  justify-items: center;
  color: #fff;
  /* font-size: 1.5rem; */
  line-height: 1.6;
  /* align-items: center; */
  /* position:absolute; */
  bottom: 0;
  width: 100%;
 background: ${props => props.theme.colors.background2};
    /* color: ${props => props.theme.colors.primary1}; */

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
 
  }
`
export const Linka = styled.a`
  color: #fff; 
`
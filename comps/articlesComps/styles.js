
import styled from 'styled-components'


export const GridContainer = styled.section`
display: grid;
 grid-template-columns: repeat(2, 1fr);
/* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
padding: 3rem;
align-self: center;
align-content: center;
column-gap: 2rem;
row-gap: 3rem;
/* padding-bottom: 10; */

@media ${(props) => props.theme.breakpoints.lg} {
   grid-template-columns: repeat(3, 1fr);
     padding: 2rem;
  padding-bottom: 0;
}

@media ${(props) => props.theme.breakpoints.md} {
   grid-template-columns: repeat(2, 1fr);
     padding: 2rem;
  padding-bottom: 0;
}
@media ${(props) => props.theme.breakpoints.sm} {
   grid-template-columns: repeat(1, 1fr);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const CardItem = styled.div`
  font-size: 1.5rem;
  line-height: 1.6;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 20px 20px;

`

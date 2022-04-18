
import styled from 'styled-components'


export const GridContainer = styled.section`
display: grid;
 grid-template-columns: repeat(2, 1fr);
 /* grid-row-gap: 20px; */
/* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
margin: 2rem auto;
max-width: 1040px;
/* align-self: center; */
/* align-content: center; */
column-gap: 3rem;

@media ${(props) => 1040} {
   grid-template-columns: repeat(1, 1fr);
   /* padding: 2rem; */
   padding-bottom: 0;
   max-width: 80%;
}

@media ${(props) => 800} {
   grid-template-columns: repeat(1, 1fr);
     padding: 2rem;
  padding-bottom: 0;
}
@media ${(props) => 500} {
   grid-template-columns: repeat(1, 1fr);
  display: flex;
  flex-direction: column;
  /* padding: 2rem; */
  padding-bottom: 10px;
}

`
export const CardItem = styled.div`
  font-size: 1.5rem;
  line-height: 1.6;
  width: 100%;
  background-color: #fff;
  padding: 15px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px auto;

  @media ${(props) => 800} {
    margin: 5px auto;
     padding: 15px 17px;
     font-size: 1.3rem;
    }
    @media ${(props) => 500} {
      margin: 5px auto;
      padding: 12px 13px;
      font-size: 1.2rem;
}
`
export const IndexSpan = styled.span`
  padding: 0px 10px;

  @media ${(props) => 800} {
    margin: 5px 0px;
     padding: 0 8px;
    }
   
`

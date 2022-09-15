import styled from 'styled-components'
import smImg from '../../../public/images/dark.jpg'

export const Img = styled.img`
  width:100%;
  height: 80vh;
  object-fit: cover;
  overflow: hidden;
`

export const Section = styled.section`
  height: 80vh;
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${props => props.theme.colors.accent1};
  /* background-image: linear-gradient(rgba(163, 166, 177, 0.5), rgba(4,9,30,0.5)), url(../../public/hc.jpg); */
  background-image: linear-gradient(rgba(31, 44, 90, 0.685), rgba(4,9,30,0.5)), url(${smImg});

 
  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    /* height: 70vh; */
    background-image: linear-gradient(rgba(31, 44, 90, 0.685), rgba(4,9,30,0.5)), url(${smImg});
 
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
   max-width: 65vw;

   @media ${props => props.theme.breakpoints.sm} {
     margin: 0 auto;
    /* max-width: 65vw; */
 
  }
 
`
export const SectionTitle = styled.h1`
  color: #030e14;

 
`

export const Linka = styled.a`
  /* color: rgba(31, 44, 90, 0.685),#fff; */
  /* background-color: #fff; */
  /* padding: 5px, 10px; */
 
`


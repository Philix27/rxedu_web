import { Section, SectionTitle, SectionText } from '../../styles';
import {CardItem, GridContainer} from './styles'


export default function ArticlesComp() {
  return (
    <Section>
      <h1>All Articles</h1>
     <GridContainer> 
        <CardItem> Aminoglycosides </CardItem>
        <p>All articles will be displayed here-
          Fetched from the db using axios

          First connect to api
        </p>
       
     
     </GridContainer>
     </Section>
    
  )
}


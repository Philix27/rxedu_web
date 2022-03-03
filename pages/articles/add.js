import { Section, SectionTitle, SectionText } from '../../styles';
import {CardItem, GridContainer} from './styles'
import AddArticle from './addArticle'

export default function ArticlesComp() {
  return (
    <Section>
     <GridContainer> 
         <CardItem> Add Articles Page </CardItem>
         <CardItem> Create Form </CardItem>
         <CardItem> Title, Content, Tags, Category,  </CardItem>
        
     
     </GridContainer>
     </Section>
    
  )
}


import { Section, SectionTitle, SectionText } from '../../styles';
import {CardItem, GridContainer} from './styles'
import AddArticle from './addArticle'
import QuizContent from '../quiz/QuizContent'
import QuizCategory from '../quiz/quiz_category'

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
        <QuizCategory />
        <QuizContent />
         {/* <CardItem> Macrolides </CardItem>
         <CardItem> Quinolones </CardItem>
         <CardItem> Antifungi </CardItem>
         <CardItem> Aminoglycosides </CardItem> */}
     
     </GridContainer>
     </Section>
    
  )
}


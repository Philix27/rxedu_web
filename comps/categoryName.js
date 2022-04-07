// import QuizContent from '../../comps/quiz/quiz_content'
// import React,  {useState, useEffect, useMemo} from 'react';
// import Axios from 'axios';
// import QuestSection from '../../comps/quiz/quest_section';
// import { useRouter } from 'next/router';
// import styles from '../../comps/quiz/quizpage.module.css'


// export default function QuizCategoryPage({questionaireList}) {
// //    const router = useRouter();
// //   const cc = router.query.categoryName;
// //   var tempo;
// //   if (cc) {
    
// //      tempo = cc.split('-');
// //   }

//     // const categoryName = tempo[0];
//     // const apiUrl = tempo[1];

//     // const apiurlLocal = `${process.env.NEXT_PUBLIC_API_URL}${apiUrl}`;
//     // const [quizList, setQuizList] =  useState([]);
//     const [quesIndex, setQuesIndex] = useState(0);
//     // const [currentIndex, setCurrentIndex] = useState(0);
//     // const [showReachedEnd, setReachedEnd] = useState(false);

    
//     useEffect(() => {
//     //     Axios.get(apiurlLocal).then((response) => {
           
//     //         setQuizList(response.data.data);
//     //         // setQuizList(response.data.data);
//     //         // console.log("Working");
//     //         // console.log(`Length: ${response.data.mcq.length}`);
//     //         // console.log(response.data.mcq);
//     //   }).catch(() => {
//         // console.log("Opps an error ocured - Local");
//         console.log(`Question List: ${questionaireList}`);
//     //   });
//     }, []);

  
//     //   var categoryBasedQuestionsList = [];
//     // questionaireList.forEach((value, index) => {
//     // // quizList.forEach((value, index) => {
//     //     if (value.category === categoryName) {
//     //         categoryBasedQuestionsList.push(value)
//     //     }
//     // }); 

//     return (
//         <div className='section'>             
//             {/* {categoryBasedQuestionsList.map((quest, index) => {  */}
//             {questionaireList.map((quest, index) => { 
//                 if (index === quesIndex) {
//                     return (
//                         <QuestSection
//                         key={index}
//                         quest={quest}
//                         index={index + 1}
//                         length={questionaireList.length} />);
//                 } 
//             })}

//             <div className={styles.buttons}>
//                  <button className="btn" onClick={() => {
//                     if (quesIndex > 0) {
                        
//                         setQuesIndex(quesIndex - 1);
//                     }
//                 }}>Prev</button>
                
//                 <button className="btn" onClick={() => {
//                     if (quesIndex < (quizList.length -1) ) {
//                         setQuesIndex(quesIndex + 1);
//                         setReachedEnd(false);
//                     } else {
//                         setReachedEnd(true);
//                     }
//                     }}>Next</button>
//             </div>

            
          
//         </div>    
//     );
//   // return <QuizContent />
// }


// export async function getStaticProps({ params }) {

//     //   var response;
//     //   try {
    
//    var  response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}mcq/`);
//     const categoryBasedQuestionsList = [];
    
//    await response.data.data.forEach((value, index) => {
//         if (value.category === params.categoryName) {
//             categoryBasedQuestionsList.push(value)
            
//         }
//      }); 
      
// //     const categoryBasedQuestionsList = response.data.data.map((value, index) => {
// //      if (value.category === params.categoryName) {
// //               return value;
// //           }
// //   });

      
// //   } catch (e) {
// //     console.log('Oops an error occured');
// //     console.log(e);
//     //  console.log(`Question List: ${categoryBasedQuestionsList}`);
// //   }
//   return {
//     props: {
//       questionaireList: categoryBasedQuestionsList
//     }
//   }
//  }


//  export async function getStaticPaths() {
     
//   const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}mcq`);     
//   const paths = response.data.data.map((article, index) => {
  
//       return {
//       params: {categoryName: article.category}
//     }
//   });
     
//   return {
//     paths,
//     fallback: false
//   }
// }

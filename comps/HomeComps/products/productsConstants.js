import {BiNotepad  } from 'react-icons/bi'
import {MdOutlineVideoLibrary  } from 'react-icons/md'
import {AiOutlinePicture } from 'react-icons/ai'
import {BsQuestionSquare } from 'react-icons/bs'

import styles from './products.module.css'

export const productsList = [
  {
    title: 'MCQs',
    icon:  (<BsQuestionSquare className={styles.icon} />),
    description: "An android app for Delta State University Students, (Nigeria). Contains an e-commerce section and a news section ",
    source: '#',
    visit: '#',
    id: 0,
  },
  {
    title: 'Flashcards',
     icon:  (<AiOutlinePicture className={styles.icon} />),
    description:"Mobile Inventory Management System. An android app to track inventory of a retail shop.",
    source: '#',
    visit: '#',
    id: 1,
  },
  {
    title: 'Videos',
     icon:  (<MdOutlineVideoLibrary className={styles.icon} />),
    description: "An Educaational App for Pharmacists preparing for various exams.",
    source: '#',
    visit: '#',
    id: 2,
  },
  {
    title: 'Articles',
     icon:  (<BiNotepad className={styles.icon} />),
    description: "An Educaational App for Pharmacists preparing for various exams.",
    source: '#',
    visit: '#',
    id: 2,
  },

];

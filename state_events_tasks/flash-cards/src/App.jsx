import { useState } from 'react'
import './App.css'
import FlashCards from './components/FlashCards'

function App() {

  const questionsAndAnswers = [
    {
      id: 1,
      question: "What is a Secret Boss?",
      answer: "A super dificult optional boss that is usually very out of the way to find",
      active: false
    },
    {
      id: 2,
      question: "What are the rewards for defeating a secret boss?",
      answer: "A Shadow Crystal and a weapon or armor",
      active: false
    },
    {
      id: 3,
      question: "What are the Shadow Crystals?",
      answer: "Lost Dreams given form via determination. Their use is so far unknown other than the fact that we need 5 to make something good",
      active: false
    },
    {
      id: 4,
      question: "What is the ShadowMantle?",
      answer: "The ShadowMantle is an item made to make the Knight final fight in Chapter 3 easier so you can obtain the ShadowCrystal from a boss that seems like a forced loss",
      active: false
    },
    {
      id: 5,
      question: "How do you obtain the ShadowMantle?",
      answer: "By getting an S-Rank or a T-Rank on both of Tenna's boards and playing the secret game in the S-Rank room in between the time these boards take place and after they're over",
      active: false
    },
    {
      id: 6,
      question: "What are the eggs?",
      answer: "A super obscure item obtained through super weird means. Not too important, not too unimportant",
      active: false
    }
  ]

  const [qna, setQna] = useState(questionsAndAnswers.map((e) => ({
      ...e
  })))

  const changeState = (index) => {
    setQna(qna.map((e) => {
        return e.id === index ? {...e, active: !e.active} : e
      }))
  }

  return (
    <main className='flex justify-center h-screen p-10 px-50 bg-black'>
      <FlashCards qna={qna} changeState={changeState}/>
    </main>
  )
}

export default App

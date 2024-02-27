import { useState, useEffect, useContext } from 'react'
import './App.css'
import exams from './assets/questions'
import GameInfo from './Components/GameInfo/GameInfo'
import Question from './Components/Question/Question'
import MyContext from './Contexts/MyContext'

function App() {
  
  const [questions, setQuestions] = useState(exams)
  const { isGameStarted, setIsGameStarted } = useContext(MyContext)
 
/* TODO: Tıklanılan soruları doğru yanlış kontrolü yap ardından arraye ekle */


    return (
      <>
      {
        isGameStarted ? (
          <Question  questions={questions} setQuestions={setQuestions} />
        ) : (
          // Return something else when isGameStarted is false
          <GameInfo isGameStarted={isGameStarted} setIsGameStarted={setIsGameStarted} />
        )
      }
      </>
    )
  }

  export default App

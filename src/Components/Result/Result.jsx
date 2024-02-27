import React, { useContext, useEffect } from 'react'
import './Result.css'
import MyContext from '../../Contexts/MyContext'
import exams from '../../assets/questions';

function Result() {

  const {totalCorrect, totalWrong, result, setIsGameStarted, setCurrentQuestionIndex, setTotalCorrect,setTotalWrong,setResult, restartResult} = useContext(MyContext)

  const handleClick = () => {
    setIsGameStarted(false)
    setCurrentQuestionIndex(0)
    setTotalCorrect(0)
    setTotalWrong(0)
    setResult(restartResult)
  };

  return (
    <div>
      <div> <h2 className='correct'>Doğru Sayısı: {totalCorrect}</h2>
      <h2 className='wrong'>Yanlış Sayısı: {totalWrong}</h2></div>
      <div className='result-wrapper'>
        {result.map((option,index) =>{
          const classNames = option.q_isCorrect ? 'correct' : 'wrong'
                            return(
                                <div className={`result-card ${classNames}`} key={index}>
                                <h2 className='q-index'>{option.q_index+1}</h2>
                                <h2 className='q-answer'>{option.q_answer}</h2>
                                </div>
                            )
                        })}
    </div>
    <button type="button" onClick={handleClick}>RESTART</button>
    </div>
  )
}

export default Result
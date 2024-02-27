import React from 'react'
import exams from '../../assets/questions';
import { useState, useEffect, useContext } from 'react'
import './question.css'
import Counter from '../Counter/Counter';
import MyContext from '../../Contexts/MyContext';
import Result from '../Result/Result';

function Question( {questions, setQuestions} ) {

    const {currentQuestionIndex, setCurrentQuestionIndex, setCounter, toggleOptions} = useContext(MyContext)

    const {totalCorrect, setTotalCorrect} = useContext(MyContext)
    const {totalWrong, setTotalWrong} = useContext(MyContext)

    const currentQuestion = exams[currentQuestionIndex];

    const {result, setResult} = useContext(MyContext)
    
//BUG VAR: CEVAPLANMAYAN SORULARI RESULT İÇİNDE CEVAPLANMADI YAZ

    function checkAnswer(chosen, option){
        


        setResult(prevResult => prevResult.map((item, index) => {
            if (index === currentQuestionIndex) {
                if(chosen === option){
                    setTotalCorrect(prevTotalCorrect => prevTotalCorrect + 1);
                    return {
                        ...item,
                        q_index: currentQuestionIndex,
                        q_answer: chosen,
                        q_isCorrect: true
                    };
                }else{
                    setTotalWrong(prevTotalWrong => prevTotalWrong + 1);
                    return {
                        ...item,
                        q_index: currentQuestionIndex,
                        q_answer: chosen,
                        q_isCorrect: false
                    };
                }
                
            }
            return item;
        }));
    
        
    }

    const handleClick = (option, answer) => {
    checkAnswer(option, answer);
    console.log(result)
    setCounter(30)
    toggleOptions()
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
      
    console.log(exams.length)

    return (
        <>
        {
            currentQuestionIndex > exams.length -1 ? (
                <Result result={result} />
            ) : (
                <div className='question-wrapper'>
            <div className='question-header'>
                <img src={currentQuestion.media} alt="" />
                 <h1>{currentQuestionIndex+1}. {currentQuestion.question}</h1>
                 <Counter/>
            </div>
            
            <div className='question-options'>
                    <ol type="A" >
                        {currentQuestion.options.map((option,index) =>{
                            return(
                                <button type="button" key={index}> <li className='options hide' onClick={() => handleClick(option, currentQuestion.answer)} >{option}</li></button>
                            )
                        })}
                        
                    </ol>
            </div>
        

        </div>
            )
        }
        
        </>
    )
}

export default Question
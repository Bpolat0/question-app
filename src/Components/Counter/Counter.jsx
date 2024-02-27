import React, { useEffect, useState, useContext } from 'react'
import '../Question/question.css'
import MyContext from '../../Contexts/MyContext'

function Counter() {
    const {counter, setCounter,currentQuestionIndex, setCurrentQuestionIndex, toggleOptions} = useContext(MyContext)
    
    useEffect(() => {
        

        const sayıcı = setTimeout(() => {
            setCounter(counter - 1)
        }, 1000);

        if(counter === 0){
            toggleOptions()
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setCounter(30)
        }
        if(counter === 20)toggleOptions()

        return () => clearTimeout(sayıcı)
    }, [counter, currentQuestionIndex])
    


  return (
    <div >
        <div>
            <h2 className='counter'>{counter}</h2>
        </div>
    </div>
  )
}

export default Counter
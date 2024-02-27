import React, { createContext, useState } from 'react';
import exams from '../assets/questions';

// Context'i oluştur
const MyContext = createContext();

// Context'i sağlayıcı (provider) bileşenini oluştur
export const MyContextProvider = ({ children }) => {



    function toggleOptions() {
        const options = document.querySelectorAll(".options")
        console.log(options)
        options.forEach(option => {
            option.classList.toggle("hide");
        });
      }

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [counter, setCounter] = useState(30)
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);
    const restartResult = exams.map(() => ({
        q_index : 0,
        q_answer: "SEÇİM YAPILMADI",
        q_isCorrect: false,
    }));
    const [result, setResult] = useState(restartResult)
    
    // İhtiyaca göre daha fazla state ekle

    const value = {
        isGameStarted,
        setIsGameStarted,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        counter,
        setCounter,
        toggleOptions,
        totalCorrect,
        setTotalCorrect,
        totalWrong,
        setTotalWrong,
        result,
        setResult,
        restartResult
      }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};


export default MyContext;



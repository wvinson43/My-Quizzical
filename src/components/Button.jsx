import React from "react"
import { nanoid } from "nanoid"

export default function Button({ value, isCorrect, isSelected, markQuestion, quizFinished, handleSelected }) {
    
    let buttonClass = ""
    
    
    if (isSelected){
        buttonClass = "selected-answer"
    } 
    if (quizFinished) {
        if (isCorrect) {
            buttonClass = "correct-answer"   
        } else if (isSelected){
            buttonClass = "incorrect-answer"
        }  
    }
    
    
    function handleClick(){
        handleSelected()
        markQuestion(isCorrect)
        }
    
    return (
        <div> 
            <button onClick={handleClick} disabled={quizFinished ? true : false} className={`answ-box ${buttonClass}`}>{value}</button>
        </div>
    )
}
import React from "react"
import Button from "./Button"
import { nanoid } from "nanoid"

export default function Question(props) {
    const {
        question,
        correctAnswer,
        incorrectAnswers, 
        quizFinished, 
        markQuestion, 
        setChosenAnswers   
    } = props
    const [answerChoices, setAnswerChoices] = React.useState([])
    
    React.useEffect(() => {
        const combinedAnswers = [...incorrectAnswers, correctAnswer]
        combinedAnswers.sort(() => 0.5 - Math.random()) 
        const renderedAnswers = combinedAnswers.map( answer => {
            const isCorrect = answer === correctAnswer
            return {
                id: nanoid(),
                value: answer,
                isCorrect: isCorrect,
                isSelected: false
            }
        })
        setAnswerChoices(renderedAnswers)
    }, [])
    
    function handleSelected(id) { // on off switch for choice
        setAnswerChoices(prev => 
            prev.map(answer => answer.id === id ? {...answer, isSelected: !answer.isSelected} : {...answer, isSelected: false})
        )
    }
    
    return (
        <div className="questions">
            <h2 className="question-asked">{props.question}</h2>
            <div className="answer-choices">
            {answerChoices.map(answer => 
                <Button
                
                    key={answer.id}
                    value={answer.value}
                    isCorrect={answer.isCorrect}
                    isSelected={answer.isSelected}
                    quizFinished={quizFinished}
                    handleSelected={() => handleSelected(answer.id)}
                    markQuestion={markQuestion}
                />
             )}
             </div>
        </div>
    )
}


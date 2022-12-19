import React from "react"
import Home from "./components/Home"
import Question from "./components/Question"
import {nanoid} from "nanoid"
import { decode } from 'js-base64';

export default function App() {
    const [startingQuiz, setStartingQuiz] = React.useState(false)   
    const [quizFinished, setQuizFinished] = React.useState(false)
    const [userQuestions, setUserQuestions] = React.useState([])
    
    
    
    React.useEffect(() => {
        if(!quizFinished){
            async function getQuestions() {
                const res = await fetch("https://opentdb.com/api.php?amount=5&category=20&difficulty=medium&type=multiple&encode=base64")
                const data = await res.json()
                setUserQuestions(data.results.map(result => createQuestion(result)))
            } 
            getQuestions()
            }  
        }, [quizFinished])
        
    function createQuestion(rawData) {
        return {
            id: nanoid(),
            question: decode(rawData.question),
            correctAnswer: decode(rawData.correct_answer),
            incorrectAnswers: rawData.incorrect_answers.map(event => decode(event)),
            isCorrect: false
        }
    }
    
    const quizQuestions = userQuestions.map(question => 
        <Question className="quiz-container"
            key={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            incorrectAnswers={question.incorrectAnswers}
            quizFinished={quizFinished}
            markQuestion={(value, id = question.id) => { markQuestion(value, id) }}
      />   
    )  
    
    
    
    function markQuestion(value, id) {
        setUserQuestions(prev => 
            prev.map(question => question.id === id ? {...question, isCorrect: value} : question))
    }

    
    function getUserScore () {
        const initialValue = 0
        return userQuestions.reduce((previousValue, currentValue) => currentValue.isCorrect ? previousValue += 1 : previousValue, initialValue)
    }
    
    const startQuiz = () => setStartingQuiz(true)

    
    
    return (
        <div className="container">
            <div className="yellow-blob"></div>
            <div className="quiz-intro">
                { !startingQuiz ?
                    <Home startQuiz={startQuiz} />
                    : 
                    <div>
                        {quizQuestions}
                        <div className="quiz-result">
                            {quizFinished &&
                                <h3>
                                    You scored {getUserScore()}/ 5 correct answers
                                </h3>
                            }
                            <button className="again-check" onClick={() => setQuizFinished(prev => !prev)}>
                                { quizFinished ? "Play again" : "Check Answers"}
                            </button>       
                        </div>
                     </div>
                  }
            </div>
            <div className="blue-blob"></div>
        </div>
    )
}



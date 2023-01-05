import React from "react"
import { nanoid } from "nanoid"

export default function Home({ startQuiz}) {
    return (
        <div>
            <div className="yellow-blob">
                <span></span>
                <span></span>
                <span></span>
                <div className="div-container">
                    <a href="#"></a>
                </div>
            </div>
            <div className="quiz-intro">
                <h1 className="quiz-title">Test Your Greek Mythology</h1>
                <h2 className="quiz-title-two">Test Mythologia Graeca Tua</h2>
                <h4 className="quiz-description">Come show off your brain power!</h4>
                <button
                    className="quiz-begin"
                    onClick={startQuiz}
                >
                Start quiz now!
                </button>
            </div>
            <div className="blue-blob">
                <span></span>
                <span></span>
                <span></span>
                <div className="div-container-two">
                    <a href="#"></a>
                </div>
            </div>
        </div>
    )
}
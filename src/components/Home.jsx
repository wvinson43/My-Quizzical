import React from "react"
import { nanoid } from "nanoid"

export default function Home({ startQuiz}) {
    return (
        <div>
            <div className="yellow-blob"></div>
            <div className="quiz-intro">
                <h1>Test Your Greek Mythology</h1>
                <h2>Test Mythologia Graeca Tua</h2>
                <h4 className="quiz-description">Come show off your brain power!</h4>
                <button
                    className="quiz-begin"
                    onClick={startQuiz}
                >
                Start quiz now!
                </button>
            </div>
            <div className="blue-blob"></div>
        </div>
    )
}
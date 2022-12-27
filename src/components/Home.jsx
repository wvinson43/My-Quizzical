import React from "react"
import { nanoid } from "nanoid"

export default function Home({ startQuiz}) {
    return (
        <div>
            <div className="yellow-blob"></div>
            <div className="quiz-intro">
                <h1>Test Your Greek Mythology</h1>
                <h1>Test Mythologia Graeca Tua</h1>
                <p className="quiz-description">Come show off your brain power!</p>
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
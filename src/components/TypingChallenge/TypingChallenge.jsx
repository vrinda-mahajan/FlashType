import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({ testInfo, selectedParagraph,timeRemaining, timeStarted }) =>{
    console.log("Inside typing :" ,testInfo)
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining < 10 ? "0"+timeRemaining : timeRemaining}</p>
                <p className="timer-info">
                    {!timeStarted && "Start typing to start the test."}
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {testInfo.map((indvidualLetterInfo) => {
                            return <TestLetter indvidualLetterInfo={indvidualLetterInfo} />
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here"></textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge ;
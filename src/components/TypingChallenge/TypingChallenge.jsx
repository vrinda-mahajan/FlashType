import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({ testInfo, onInputChange,timeRemaining, timeStarted }) =>{
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
                        {testInfo.map((indvidualLetterInfo,index) => {
                            return <TestLetter key={index} indvidualLetterInfo={indvidualLetterInfo} />
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea onChange={(e) => onInputChange(e.target.value)} className="textarea" placeholder="Start typing here"></textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge ;
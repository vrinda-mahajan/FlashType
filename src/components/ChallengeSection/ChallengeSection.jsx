import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";
const ChallengeSection = ({ testInfo,selectedParagraph, words, characters, wpm, timeRemaining, timeStarted}) =>{
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now!
            </h1>
            <TestContainer 
            selectedParagraph={selectedParagraph} 
            testInfo={testInfo}
            timeStarted={timeStarted}
            timeRemaining={timeRemaining} 
            words={words} 
            characters={characters} 
            wpm={wpm}/>
        </div>
    )
}

export default ChallengeSection ;
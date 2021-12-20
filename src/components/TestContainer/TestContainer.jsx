import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";
const TestContainer = ({ startAgain,onInputChange,testInfo, selectedParagraph, words, characters, wpm, timeRemaining, timeStarted}) => {
    
    return(
        <div className="test-container">
            {timeRemaining>0?(<div data-aos="fade-up" className="typing-challenge">
               <TypingChallengeContainer 
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timeStarted={timeStarted}
                testInfo={testInfo}
                words={words} 
                characters={characters} 
                wpm={wpm} 
                onInputChange={onInputChange} />
           </div>):
            (<div className="try-again">
            <TryAgain 
            words={words} 
            characters={characters} 
            wpm={wpm}
            startAgain={startAgain} />
            </div>)} 
        </div>
    )
}

export default TestContainer ;
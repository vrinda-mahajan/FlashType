import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";
const TestContainer = ({words,characters,wpm}) => {
    const timeRemaining = 30 ;
    return(
        <div className="test-container">
            {timeRemaining>0?(<div data-aos="fade-up" className="typing-challenge">
               <TypingChallengeContainer 
                words={words} 
                characters={characters} 
                wpm={wpm} />
           </div>):
            (<div className="try-again">
            <TryAgain 
            words={words} 
            characters={characters} 
            wpm={wpm} />
            </div>)}
        </div>
    )
}

export default TestContainer ;
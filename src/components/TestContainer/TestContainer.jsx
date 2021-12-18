import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";
const TestContainer = ({words,characters,wpm}) => {
    return(
        <div className="test-container">
           {/* <div className="try-again">
           <TryAgain 
           words={words} 
           characters={characters} 
           wpm={wpm} />
           </div> */}
           <div data-aos="fade-up" className="typing-challenge">
               <TypingChallengeContainer 
                words={words} 
                characters={characters} 
                wpm={wpm} />
           </div>
        </div>
    )
}

export default TestContainer ;
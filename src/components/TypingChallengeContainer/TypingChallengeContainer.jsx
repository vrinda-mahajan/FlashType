import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({ testInfo,selectedParagraph, words, characters, wpm, timeRemaining, timeStarted}) => {
    return(
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
            </div>
            {/* The Real Challenge */}
            <div className="typewriter-container">
                <TypingChallenge 
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timeStarted={timeStarted}
                testInfo={testInfo} />
            </div>
        </div>
    );
}

export default TypingChallengeContainer ;
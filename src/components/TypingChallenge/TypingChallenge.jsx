import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({words,characters,wpm}) => {
    return(
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words typed */}
                <p>Words</p>
                {/* Characters Typed */}
                <p>Characters</p>
                {/* Speed */}
                <p>Speed</p>
            </div>
            {/* The Real Challenge */}
            <div className="typewriter-container">
                <p>This is the REAL Challenge</p>
            </div>
        </div>
    );
}

export default TypingChallenge ;
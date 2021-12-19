import React from "react";
import "./TestLetter.css";
const TestLetter = ({ indvidualLetterInfo }) =>{
    const {status} = indvidualLetterInfo ;
    console.log(status)
    const statusClass = {
        correct : "test-letter-correct",
        incorrect : "test-letter-incorrect",
        notAttempted : "test-letter-not-attempted",
    }[status];

    return(
        <span className={`test-letter ${statusClass}`}>
            {indvidualLetterInfo.testLetter}
        </span>
    )
}

export default TestLetter;
import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component{
    state = {
        selectedParagraph: "Hello World!",
        timeStarted: false,
        timeRemaining: 60,
        testInfo:[],
        words: 0,
        characters: 0,
        wpm: 0,
    }
   
    componentDidMount(){
        // fetch(ServiceUrl)
        // .then(response=>response.text())
        // .then((data)=>{
        //     this.setState({selectedParagraph:data})
        // });
        const selectedParagraphArray = this.state.selectedParagraph.split("") ;
        const testInfo = selectedParagraphArray.map((selectedLetter)=>{
        return {
            testLetter: selectedLetter,
            status : "notAttempted"
        }
    })
    this.setState({testInfo:testInfo})
    }
    
    render(){
        
        return (
            <div className="app">
                {/* Nav Section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Challenge Section */}
                <ChallengeSection 
                selectedParagraph={this.state.selectedParagraph}
                testInfo={this.state.testInfo}
                words={this.state.words}
                characters={this.state.characters}
                wpm={this.state.wpm}
                timeRemaining={this.state.timeRemaining}
                timeStarted={this.state.timeStarted} />
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
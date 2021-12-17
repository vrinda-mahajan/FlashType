import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";
class App extends React.Component{
    render(){
        return (
            <div className="app">
                {/* Nav Section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Challenge Section */}
                <ChallengeSection />
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
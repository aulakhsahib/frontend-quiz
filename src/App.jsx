import { useState, useRef } from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import ScorePage from './components/ScorePage/ScorePage';
import LandingPage from './components/LandingPage/LandingPage';
import data from './data';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [quizUserSelected, setQuizUserSelected] = useState(''); //default ''
  const scores = useRef(0);
  const [landingPageVisibility, setLandingPageVisibility] = useState(true); //default true
  const [showScorecard, setShowScorecard] = useState(false); //default false

  let quizToShow;
  if (quizUserSelected) {
    quizToShow = data.quizzes.find(quiz => quiz.title === quizUserSelected);
  }


  if (landingPageVisibility) {
    return (
      <div className="parent-wrapper-container">
        <Navbar quizToShow={quizToShow} />
        <LandingPage {...{ quizUserSelected, setQuizUserSelected, setLandingPageVisibility }} />
      </div>
    );
  } else if (showScorecard) {
    return (
      <div className="parent-wrapper-container">
        <Navbar quizToShow={quizToShow} />
        <ScorePage scores={scores} quizToShow={quizToShow} setQuizUserSelected={setQuizUserSelected} setLandingPageVisibility={setLandingPageVisibility} setShowScorecard={setShowScorecard} />
      </div>
    );
  } else {
    return (
      <div className="parent-wrapper-container">
        <Navbar quizToShow={quizToShow} />
        <Quiz quizToShow={quizToShow} setScorecardVisibilty={setShowScorecard} scores={scores} />
      </div>
    );
  }
}

export default App

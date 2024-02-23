import { useState } from 'react';
import './App.css'
import QuestionCard from './components/QuestionCard/QuestionCard';
import Scorecard from './components/Scorecard/Scorecard';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [quizUserSelected, setQuizUserSelected] = useState('');
  const [scores, setScores] = useState(0);
  const [landingPageVisibility, setLandingPageVisibility] = useState(true);
  const [showScorecard, setShowScorecard] = useState(false);



  if (landingPageVisibility) {
    return <LandingPage {...{ quizUserSelected, setQuizUserSelected, setLandingPageVisibility }} />
  } else if (showScorecard) {
    return <Scorecard score={scores} />
  } else {
    return <QuestionCard setScorecardVisibilty={setShowScorecard} setScores={setScores} />
  }
}

export default App

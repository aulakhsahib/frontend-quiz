import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import ScorePage from "./components/ScorePage/ScorePage";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import useQuiz from "./hooks/useQuiz";

function App() {
  const { landingPageVisibility, scorePageVisibility } = useQuiz();

  if (landingPageVisibility) {
    return (
      <div className="parent-wrapper-container">
        <Navbar />
        <LandingPage />
      </div>
    );
  } else if (scorePageVisibility) {
    return (
      <div className="parent-wrapper-container">
        <Navbar />
        <ScorePage />
      </div>
    );
  } else {
    return (
      <div className="parent-wrapper-container">
        <Navbar />
        <Quiz />
      </div>
    );
  }
}

export default App;

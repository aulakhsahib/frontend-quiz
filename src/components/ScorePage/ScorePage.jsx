/* eslint-disable react/prop-types */
import useQuiz from "../../hooks/useQuiz";
import FormButton from "../FormButton/FormButton";
import Scorecard from "../Scorecard/Scorecard";
import "./ScorePage.css";
export default function ScorePage() {
  const {
    userScores,
    setQuizUserSelected,
    setScorePageVisibility,
    setLandingPageVisibility,
  } = useQuiz();

  const clickHandler = () => {
    userScores.current = 0;
    setQuizUserSelected("");
    setLandingPageVisibility(true);
    setScorePageVisibility(false);
  };

  return (
    <div className="scorepage-parent-container">
      <div>
        <h1 className="quiz-completed-heading">
          Quiz Completed<span>You Scored...</span>
        </h1>
      </div>
      <div>
        <Scorecard />
        <FormButton onClick={clickHandler}>Take Another Quiz</FormButton>
      </div>
    </div>
  );
}

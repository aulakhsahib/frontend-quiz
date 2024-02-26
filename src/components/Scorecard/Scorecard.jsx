/* eslint-disable react/prop-types */
import useQuiz from "../../hooks/useQuiz";
import "./Scorecard.css";
export default function Scorecard() {
  const { quizData, userScores } = useQuiz();

  const { icon: quizIcon, title: quizTitle } = quizData;
  const totalQuestions = quizData.questions.length;

  return (
    <div className="scorecard-container">
      <div className="scorecard-icon-container">
        <img src={quizIcon} />
        <p>{quizTitle}</p>
      </div>
      <p className="scores-digit">{userScores.current}</p>
      <p className="total-questions">out of {totalQuestions}</p>
    </div>
  );
}

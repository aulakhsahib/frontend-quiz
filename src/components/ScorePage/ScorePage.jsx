/* eslint-disable react/prop-types */
import FormButton from '../FormButton/FormButton';
import Scorecard from '../Scorecard/Scorecard';
import './ScorePage.css';
export default function ScorePage({ quizToShow, scores, setQuizUserSelected, setShowScorecard, setLandingPageVisibility }) {



    const clickHandler = () => {
        scores.current = 0;
        setQuizUserSelected('');
        setLandingPageVisibility(true);
        setShowScorecard(false);
    }

    return (
        <div className="scorepage-parent-container">
            <div>
                <h1 className="quiz-completed-heading">Quiz Completed<span>You Scored...</span></h1>
            </div>
            <div>
                <Scorecard scores={scores} quizUserSelected={quizToShow} />
                <FormButton onClick={clickHandler}>Take Another Quiz</FormButton>
            </div>
        </div>
    );
}
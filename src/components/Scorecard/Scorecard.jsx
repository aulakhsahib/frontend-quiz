/* eslint-disable react/prop-types */
import './Scorecard.css';
export default function Scorecard({ scores, quizUserSelected }) {
    const { icon, title } = quizUserSelected;
    const totalQuestions = quizUserSelected.questions.length;

    return (

        <div className="scorecard-container">
            <div className="scorecard-icon-container">
                <img src={icon} />
                <p>{title}</p>
            </div>
            <p className="scores-digit">{scores.current}</p>
            <p className="total-questions">out of {totalQuestions}</p>
        </div>
    
    );
}
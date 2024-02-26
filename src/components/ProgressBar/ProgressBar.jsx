/* eslint-disable react/prop-types */
import './ProgressBar.css';
export default function ProgressBar({ currentQuestionIndex, noOfQuizQuestions, className }) {

    const width = ((currentQuestionIndex + 1) / noOfQuizQuestions) * 100;
    return (
        <div className={`progress-bar-parent-container ${className}`}>
            <div className="progress-bar" style={{ width: `${width}%` }}></div>
        </div>
    );
}
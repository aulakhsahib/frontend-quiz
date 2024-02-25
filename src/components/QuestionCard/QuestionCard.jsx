/* eslint-disable react/prop-types */
import { useState } from 'react';
import './QuestionCard.css';
import RadioButton from '../RadioButton/RadioButton.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
export default function QuestionCard({ question, options, answer, scores, setScorecardVisibilty, noOfQuizQuestions, currentQuestionIndex, setQuestionToShow }) {
    const [checkedValue, setCheckedValue] = useState('');
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        if (!checkedValue) return;

        if (currentQuestionIndex + 1 === noOfQuizQuestions) {
            setScorecardVisibilty(true);
        }

        setQuestionToShow(prevQues => {
            if (prevQues + 1 === noOfQuizQuestions) return 1;
            else return prevQues + 1;
        })
    }

    const showAnswersHandler = e => {
        e.preventDefault();
        if (!checkedValue) {
            setShowWarning(true);
            return;
        }

        if (checkedValue === answer) {
            scores.current++;
        }

        setShowCorrectAnswer(true);

    }

    return (
        <>
            <form onSubmit={submitHandler} className="form-container">
                <div className="quiz-question-options-parent-container">
                    <div className="question-progress-bar-container">
                        <p className="question-indicator">Question {currentQuestionIndex + 1} of {noOfQuizQuestions}</p>
                        <p className="question">{question}</p>
                        <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestion={noOfQuizQuestions} className="quiz-container-progress-bar" />

                    </div>

                    <div className="quiz-options-container">
                        {

                            options.map((choice, index) => {
                                let msg;
                                let styleAttributes = {};

                                if (checkedValue === choice) {
                                    styleAttributes = { selected: true };
                                }

                                if (showCorrectAnswer) {
                                    const isThisOptionRight = choice === answer;
                                    const didYouSelectedIt = choice === checkedValue;
                                    if (isThisOptionRight) {
                                        if (didYouSelectedIt) {
                                            // msg = 'You Selected the Right Option'
                                            styleAttributes = { correctSelected: true };
                                        }
                                        else {
                                            // msg = 'This is the right option. But you did not select it.'
                                            styleAttributes = { correctDidNotSelected: true };
                                        }
                                    } else {
                                        if (didYouSelectedIt) {
                                            // msg = 'You selected the wrong option'
                                            styleAttributes = { incorrectSelected: true };
                                        }
                                    }

                                    styleAttributes = { ...styleAttributes, disableBtn: true }
                                }
                                return (
                                    <>
                                        {msg ? msg : ''}
                                        <RadioButton key={index} name={question} value={choice} checkedValue={checkedValue} setCheckedValue={setCheckedValue} {...styleAttributes}><span>{index + 1}</span><p>{choice}</p></RadioButton>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div> */}

                <div className="submit-button-container" >
                    {showCorrectAnswer ? <FormButton className="submit-answer-button" type="submit">Next Question</FormButton> : <FormButton onClick={showAnswersHandler} className="submit-answer-button">Submit Answer</FormButton>}
                </div>
                {showWarning && (!checkedValue && <div className="warning-container">Please Select a Option</div>)}

                {/* </div> */}

            </form>
        </>
    );
}

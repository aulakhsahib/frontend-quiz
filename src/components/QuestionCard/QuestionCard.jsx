/* eslint-disable react/prop-types */
import { useState } from 'react';
import './QuestionCard.css';
import RadioButton from '../RadioButton/RadioButton.jsx';
import quizData from '../../data.jsx';
import FormButton from '../FormButton/FormButton.jsx';
export default function QuestionCard({ setScorecardVisibilty, setScores }) {
    const quizToShow = quizData.quizzes[0];
    const [checkedValue, setCheckedValue] = useState('');
    const [questionToShow, setQuestionToShow] = useState(1);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        if (!checkedValue) return;

        if (checkedValue === quizToShow.questions[questionToShow].correctAnswer) {
            setScores(prevScore => prevScore + 1);
        }

        if (questionToShow + 1 === quizToShow.questions.length) {
            setScorecardVisibilty(true);
        }

        setQuestionToShow(prevQues => {
            if (prevQues + 1 === quizToShow.questions.length) return 1;
            else return prevQues + 1;
        })
        setCheckedValue('');
        setShowCorrectAnswer(false);
    }

    const showAnswersHandler = e => {
        e.preventDefault();
        if (!checkedValue) return;
        setShowCorrectAnswer(true);

    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <p>{quizToShow.questions[questionToShow].question}</p>
                {

                    quizToShow.questions[questionToShow].choices.map((choice, index) => {
                        let msg;
                        let styleAttributes = {};

                        if (checkedValue === choice) {
                            styleAttributes = { selected: true };
                        }

                        if (showCorrectAnswer) {
                            const isThisOptionRight = choice === quizToShow.questions[questionToShow].correctAnswer;
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
                                <RadioButton key={index} name={quizToShow.questions[questionToShow].question} value={choice} checkedValue={checkedValue} setCheckedValue={setCheckedValue} {...styleAttributes}><span>{index + 1}</span><p>{choice}</p></RadioButton>
                            </>
                        )
                    })
                }
                {showCorrectAnswer ? <FormButton type="submit">Next Question</FormButton> : <FormButton onClick={showAnswersHandler}>Submit Answer</FormButton>}
            </form>
            {checkedValue}
        </>
    );
}

/*

quizToShow.questions[questionToShow].choices.map((choice, index) => {
    return <OptionButton key={index} question={quizToShow.questions[questionToShow].question} optionText={choice} checkedValue={checkedValue} setCheckedValue={setCheckedValue}     />
});
*/

// let msg;
// if (showCorrectAnswer) {
//     const isThisOptionRight = choice === selectQuizData[selectedQuestion].correctAnswer;
//     const didYouSelectedIt = choice === selectedAnswer;
//     if (isThisOptionRight) {
//         if (didYouSelectedIt) msg = 'You Selected the Right Option';
//         else msg = 'This is the right option. But you did not selected it.';
//     } else {
//         if (didYouSelectedIt) msg = 'You selected the wrong option';
//     }
// }
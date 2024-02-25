/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Quiz.css';
import QuestionCard from '../QuestionCard/QuestionCard.jsx';


export default function Quiz({ quizToShow, setScorecardVisibilty, scores }) {
    // const [loading, setLoading] = useState(true);
    const quizData = quizToShow.questions;
    const [questionToShow, setQuestionToShow] = useState(0);

    return (
        <>
            <QuestionCard key={quizData[questionToShow].question} {...quizData[questionToShow]} setQuestionToShow={setQuestionToShow} noOfQuizQuestions={quizData.length} currentQuestionIndex={questionToShow} scores={scores} setScorecardVisibilty={setScorecardVisibilty} />
        </>
    );

}
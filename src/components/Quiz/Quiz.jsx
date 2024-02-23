import { useState } from 'react';
import './Quiz.css';
import QuestionCard from '../QuestionCard/QuestionCard.jsx';
import quizData from '../../data.jsx';


export default function Quiz({ setScorecardVisibilty, setScores }) {
    const quizToShow = quizData.quizzes[0];
    const [loading, setLoading] = useState(true);
    const [quizData, setQuizData] = useState(questionToShow.questions);
    const [questionToShow, setQuestionToShow] = useState(1);

    return (
        <>
            <QuestionCard {...quizData[questionToShow]} />
        </>
    );

}
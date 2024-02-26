/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Quiz.css";
import QuestionCard from "../QuestionCard/QuestionCard.jsx";
import useQuiz from "../../hooks/useQuiz.jsx";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { quizData } = useQuiz();
  const { questions: quizQuestions } = quizData;
  const noOfQuizQuestions = quizQuestions.length;
  const { question, options, answer } = quizQuestions[currentQuestionIndex];
  //   Pass down    key, question, options, answer, setQuestionToShow, currentQuestionIndex, noOfQuizQuestions
  //   Not passing scores, setScorecardVisibility down

  return (
    <>
      <QuestionCard
        key={quizQuestions[currentQuestionIndex].question}
        question={question}
        options={options}
        answer={answer}
        setQuestionToShow={setCurrentQuestionIndex}
        noOfQuizQuestions={noOfQuizQuestions}
        currentQuestionIndex={currentQuestionIndex}
      />
    </>
  );
}

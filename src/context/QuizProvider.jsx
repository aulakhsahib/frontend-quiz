/* eslint-disable react/prop-types */
import data from "../data";
import { useState, useRef } from "react";
import { createContext } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [quizUserSelected, setQuizUserSelected] = useState(""); //default ''
  const [landingPageVisibility, setLandingPageVisibility] = useState(true); //default true
  const [scorePageVisibility, setScorePageVisibility] = useState(false); //default false
  const userScores = useRef(0);

  let quizData;
  if (quizUserSelected) {
    quizData = data.quizzes.find((quiz) => quiz.title === quizUserSelected);
  }

  return (
    <QuizContext.Provider
      value={{
        quizUserSelected,
        setQuizUserSelected,
        landingPageVisibility,
        setLandingPageVisibility,
        scorePageVisibility,
        setScorePageVisibility,
        userScores,
        quizData,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContext;

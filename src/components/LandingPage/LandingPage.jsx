/* eslint-disable react/prop-types */
import "./LandingPage.css";
import RadioButton from "../RadioButton/RadioButton.jsx";
import quizData from "../../data.jsx";
import FormButton from "../FormButton/FormButton.jsx";
import { useState } from "react";
import useQuiz from "../../hooks/useQuiz.jsx";

export default function LandingPage() {
  const { setQuizUserSelected, setLandingPageVisibility } = useQuiz();
  const [checkedValue, setCheckedValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!checkedValue) return;
    setQuizUserSelected(checkedValue);
    setLandingPageVisibility(false);
  };

  return (
    <>
      <div className="landing-page-parent-container">
        <div className="welcome-container">
          <h1 className="welcome-heading">
            Welcome to the{" "}
            <span className="heading-bold-section">Frontend Quiz!</span>
          </h1>
          <p>Select the topic you want for the quiz</p>
        </div>
        <div className="quiz-selection-container">
          <form onSubmit={submitHandler}>
            {quizData.quizzes.map(({ title, icon }, index) => {
              let styleAttributes = { defaultBtn: true };
              if (title === checkedValue) styleAttributes = { selected: true };
              return (
                <RadioButton
                  key={index}
                  name="Choose the quiz topic"
                  value={title}
                  checkedValue={checkedValue}
                  setCheckedValue={setCheckedValue}
                  {...styleAttributes}
                >
                  <img src={icon} />
                  <p>{title}</p>
                </RadioButton>
              );
            })}
            {checkedValue && <FormButton type="submit">Start Quiz</FormButton>}
          </form>
        </div>
      </div>
    </>
  );
}

// For form options you will use map function in real project

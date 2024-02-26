/* eslint-disable react/prop-types */
import useQuiz from "../../hooks/useQuiz";
import "./Navbar.css";
export default function Navbar() {
  const { quizData } = useQuiz();
  let quizIcon, quizTitle, iconContainer;
  if (quizData) {
    quizIcon = quizData.icon;
    quizTitle = quizData.title;
    iconContainer = (
      <div className="navbar-icon-container">
        <span className="navbar-icon">
          <img src={quizIcon} />
        </span>
        <p className="navbar-label">{quizTitle}</p>
      </div>
    );
  }

  return (
    <nav className="navbar">
      {quizData ? (
        iconContainer
      ) : (
        <div className="placeholder-navbar-container"></div>
      )}
      <div className="navbar-theme-toggle-container">
        <input
          type="checkbox"
          name="color-theme-toggle"
          id="color-theme-toggle"
          className="color-theme-toggle"
        />
        <label htmlFor="color-theme-toggle"></label>
      </div>
    </nav>
  );
}

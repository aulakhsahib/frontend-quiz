/* eslint-disable react/prop-types */
import './FormButton.css';
export default function FormButton({ children, ...buttonAttributes }) {
    return (
        <button className="quiz-button" {...buttonAttributes}>{children}</button>
    );
}
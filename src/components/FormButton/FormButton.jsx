/* eslint-disable react/prop-types */
import './FormButton.css';
export default function FormButton({ children, className, ...buttonAttributes }) {
    return (
        <button className={`quiz-button ${className}`} {...buttonAttributes}>{children}</button>
    );
}
import { useContext } from "react";
import QuizContext from "../context/QuizProvider";

export default function useQuiz() {
    return useContext(QuizContext);
}

/* eslint-disable react/prop-types */
import './LandingPage.css';
import RadioButton from '../OptionButton/RadioButton';
import quizData from '../../data.jsx';
import FormButton from '../FormButton/FormButton.jsx';

export default function LandingPage({ quizUserSelected, setQuizUserSelected, setLandingPageVisibility }) {

    const submitHandler = e => {
        e.preventDefault();
        if (!quizUserSelected) return;
        // const formData = new FormData(e.target);
        setLandingPageVisibility(false);
    }


    return (
        <>
            <h1>Welcome To Web Dev Quiz</h1>
            <p>Select the topic you want for the quiz</p>
            <form onSubmit={submitHandler}>
                {
                    quizData.quizzes.map(({ title }, index) => {
                        let styleAtrributes = { defaultBtn: true };
                        if (title === quizUserSelected) styleAtrributes = { selected: true };
                        return (
                            <RadioButton key={index} name="Choose the quiz topic" value={title} checkedValue={quizUserSelected} setCheckedValue={setQuizUserSelected} {...styleAtrributes}>
                                <span>{index + 1}</span>
                                <p>{title}</p>
                            </RadioButton>
                        );
                    })
                }
                {quizUserSelected && <FormButton type="submit">Start Quiz</FormButton>}
            </form>
            {quizUserSelected}
        </>
    );
}

/* 
For form options you will use map function in real project.

For RadioButton, I want
1. name
2. value
3. setCurrentSelectedValue This will be used in onChange(This uses setter from parent. For eg, e => setterFromParent(e.target.value))
4. currentSelectedValue (used in checked attribute)
5. label / children
*/
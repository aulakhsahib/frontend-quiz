# Quiz App

## Component Hierarchy

```mermaid
flowchart TB
    App["`App
    **State Stored**
    1. score(setScore)
    2. showScorecard(setShowScorecard)
    3. landPageVisibilty(setLandingPageVisibility)
    4. quizUserSelected(setQuizUserSelected)
    Props
    None
    `"]
    
    LandingPage["`LandingPage
    data import quiz
    State Stored
    None
    Props
    1. quizUserSelected (from App)
    2. setQuizUserSelected (from App)
    3. setLandingPageVisibility (from App)
    `"]

    Scorecard["`
    Scorecard
    **State Stored**
    None
    Props
    1. score(from App)
    `"]

    QuestionCard["`
    QuestionCard
    Data Import
    1. quizData
    **State Stored**
    1. checkedValue
    2. questionToShow
    3. showCorrectAnswer
    Props
    1. setScorecardVisibility
    2. setScores
    `"]

    RadioButton["`
    Radio Button
    **State Stored**
    None
    Props
    1. name
    2. value
    3. checkedValue
    4. setCheckedValue
    5. children
    styling props
    6. defaultBtn
    7. selected
    8. correctSelected
    9. incorrectSelected
    10. correctDidNotSelected
    11. disableBtn
    `"]

    FormButton["`FormButton
    State Stored
    None
    Props
    1. children
    2. buttonAttributes`"]
    
    App --> Scorecard
    App --> LandingPage
    App --> QuestionCard
    LandingPage --> FormButton
    LandingPage --> RadioButton
    QuestionCard --> RadioButton
    QuestionCard --> FormButton
```

## To do

1. Add the quiz selection (Add quiz component first).
2. User cannot select the answer after checking answer.
3. reset score after quiz
4. Add quiz component
5. Remake the component diagram and refactor

## Quiz Component

1. Loading State
2. quizToShow prop from parent
3. State quiz data fetch, question to show.

Data Import / Fetch

1. quizData
2. questionToShow
3. setScorecardVisibility
4. setScores

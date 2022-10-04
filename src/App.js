import Question from "./components/Question";
import QuestionSearch from "./components/QuestionSearch";
import React, { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false); 

  const [options, setOptions] = useState({})

  // functions
  // check if given answer is correct
  // move to next question in list

  return (

    

    <div className="App">
      <div>hello</div>
      <QuestionSearch 
        questions={questions} 
        setQuestions={setQuestions}
        options={options}
        setOptions={setOptions}
        />
      <Question
        questions={questions}
        setQuestions={setQuestions}
        // options={options}
        // setOptions={setOptions}
        activeQuiz={activeQuiz} 
        setActiveQuiz={setActiveQuiz}
        currentNumber={currentNumber} 
        setCurrentNumber={setCurrentNumber}
        options={options}
        setOptions={setOptions}
      />
    </div>
  );
}

export default App;

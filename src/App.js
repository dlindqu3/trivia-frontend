import Question from "./components/Question";
import QuestionSearch from "./components/QuestionSearch";
import HomePage from "./pages/HomePage";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  const [options, setOptions] = useState({});

  // functions
  // check if given answer is correct
  // move to next question in list

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/search"
              element={
                <QuestionSearch
                  questions={questions}
                  setQuestions={setQuestions}
                  options={options}
                  setOptions={setOptions}
                />
              }
            />
            <Route
              path="/question"
              element={
                <Question
                  questions={questions}
                  setQuestions={setQuestions}
                  activeQuiz={activeQuiz}
                  setActiveQuiz={setActiveQuiz}
                  currentNumber={currentNumber}
                  setCurrentNumber={setCurrentNumber}
                  options={options}
                  setOptions={setOptions}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

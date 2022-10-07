import Question from "./components/Question";
import QuestionSearch from "./components/QuestionSearch";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import Header from "./components/Header";
import Login from './pages/Login';
import Register from './pages/Register';
import SearchPage from "./pages/SearchPage";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  const [options, setOptions] = useState({});


  // Auth
  

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header /> 
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            {/* <Route
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
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

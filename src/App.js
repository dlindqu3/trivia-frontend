import Question from './components/Question';
import QuestionSearch from './components/QuestionSearch';
import React, { useState } from "react";



function App() {

  const [questions, setQuestions] = useState([]);

  
  return (
    <div className="App">
      <div>hello</div>
      <QuestionSearch questions={questions} setQuestions={setQuestions}/> 
      <Question questions={questions} setQuestions={setQuestions}/> 
    </div>
  );
}

export default App;

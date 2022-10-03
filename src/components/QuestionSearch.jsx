import React, { useState } from "react";

function QuestionSearch() {
  // const [questions, setQuestions] = useState();
  const [selectedCategory, setSelectedCategory] = useState(); 
  const [difficulty, setDifficulty] = useState(); 

  let catNums = {
    'general knowledge': 9, 
    'entertainment: books': 10, 
    'entertainment: film': 11, 
    'entertainment: music': 12, 
    'entertainment: musicals & theatres': 13, 
    'entertainment: television': 14, 
    'entertainment: video games': 15, 
    'entertainment: board games': 16, 
    'science & nature': 17, 
    'science: computers': 18, 
    'science: mathematics': 19, 
    'mythology': 20, 
    'sports': 21, 
    'geography': 22, 
    'history': 23, 
    'politics': 24, 
    'art': 25, 
    'celebrities': 26, 
    'animals': 27
  }

  let levels = {
    1: 'easy', 2: 'medium', 3: 'hard'
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('selected category: ', selectedCategory)
    console.log('difficulty: ', difficulty)
  }
  
  let handleCatChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  let handleLevChange = (event) => {
    setDifficulty(event.target.value)
  }

  return (
    <div>
      <div>Question Search</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">
          Category:
          <select name="category" id="category"  onChange={handleCatChange} >
            <option hidden>SELECT</option>
            {Object.keys(catNums).map((item) => {
              return <option value={item} key={item}>{item}</option>
            })}
          </select>
        </label>

        <br /> 
        <br />
          
        <label htmlFor="difficulty">
          Difficulty: 
          <select name="difficulty" id="difficulty" onChange={handleLevChange}>
          <option hidden>SELECT</option>
            {Object.values(levels).map((item) => {
              return <option value={item} key={item}>{item}</option>
            })}
          </select>
        </label>

        <br /> 
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default QuestionSearch;

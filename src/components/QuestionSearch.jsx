import React, { useState } from "react";
import axios from 'axios'; 

function QuestionSearch(  props  ) {
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


  // fisher-yates shuffle algorithm
  let shuffleOptions = (obj) => {
        for (let key in obj){
          let currentOptionsArr = obj[key]
          for (let i = 0; i < currentOptionsArr.length; i++){
            let j = Math.floor(Math.random() * (i + 1));
            let temp = currentOptionsArr[i]
            currentOptionsArr[i] = currentOptionsArr[j]
            currentOptionsArr[j] = temp 
      }
    }
    return obj
  }



  let handleSubmit = async (event) => {
    event.preventDefault();
    let url = `http://localhost:4000/api/trivia/${catNums[selectedCategory]}/${difficulty}`
    let result = await axios.get(url)
    let questionsArray = result.data.resData.results
    let finishedSetQuestions = await props.setQuestions(questionsArray)

    // set up options 
    let obj = {}
    for (let i = 0; i < questionsArray.length; i++){
      obj[i] = [questionsArray[i]['correct_answer']]
      // console.log([questionsArray[i]['incorrect_answers']])
      let currentQ = questionsArray[i]
      for (let j = 0; j < currentQ['incorrect_answers'].length; j++){
        // console.log(currentQ['incorrect_answers'][j])
        obj[i].push(currentQ['incorrect_answers'][j])
      }
    }

    let shuffledOptions = shuffleOptions(obj)

    props.setOptions(shuffledOptions)
  }
  
  let handleCatChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  let handleLevChange = (event) => {
    setDifficulty(event.target.value)
  }

  return (

    <div>

      {/* {console.log('props in questionSearch: ', props)} */}
      
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

        <input type="submit" value="Start" />
      </form>
    </div>
  );
}

export default QuestionSearch;

import React, { useEffect, useState } from "react"


function Question( props ) {
   
  return (

    <div>

      {/* {console.log('props in Question: ', props)}
      {console.log('Question -- props.question[0]: ', props.questions[0])} */}

      <div>Question here</div>
     
      <form>
        <p>{props.questions[0] && props.questions[props.currentNumber]['question']}</p>
        <p>{props.options[0] && props.options[0][0]}</p>
        <p>{props.options[0] && props.options[0][1]}</p>
        <p>{props.options[0] && props.options[0][2]}</p>
        <p>{props.options[0] && props.options[0][3]}</p>
        <p></p>
      </form>
      
    </div>
  )
}

export default Question

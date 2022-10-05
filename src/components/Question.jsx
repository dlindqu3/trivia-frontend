import React, { useEffect, useState } from "react"


function Question( props ) {
  
  return (

    <div>
      <p>Question component here</p>
      {console.log('props: ', props)}
      <form>
        <p>{props.questions[0] && props.questions[props.currentNumber]['question']}</p>
        <p>{props.options[props.currentNumber] && props.options[props.currentNumber][0]}</p>
        <p>{props.options[props.currentNumber] && props.options[props.currentNumber][1]}</p>
        <p>{props.options[props.currentNumber] && props.options[props.currentNumber][2]}</p>
        <p>{props.options[props.currentNumber] && props.options[props.currentNumber][3]}</p>
        <p></p>
      </form>
      
    </div>
  )
}

export default Question

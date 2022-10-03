import React from 'react'

function Question( props ) {
  return (
    <div>
      <div>Question here</div>
      { props.questions[0] && props.questions[0].question}
    </div>
  )
}

export default Question

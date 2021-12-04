import React from 'react';
import Score from './Score';

function Student(props) {
  const scores = props.scores.map((score, idx) => {
    return <Score  
    score={score.score} 
    date={score.date} 
    key={idx}/>
  })

  return (
    <div>
    {props.name}
    {scores}
    </div>
  )
}

export default Student
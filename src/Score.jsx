import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Score(props) {
  return (
    <ListGroup.Item variant="primary">
     <span> <b> Date: </b>{props.date} </span>
     <br/>
     <span> <b> Score: </b>{props.score} </span>
     </ListGroup.Item>
  )
}

export default Score
import React from "react";
import Score from "./Score";
import { Card, ListGroup, CardGroup } from "react-bootstrap";

function Student(props) {
  const scores = props.scores.map((element, idx) => {
    return <Score score={element.score} date={element.date} key={idx} />;
  });

  return (
    <>
      <CardGroup>
        <Card bg="secondary" border="dark" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Header as="h5">{props.name}</Card.Header>
            <Card.Text>{props.bio}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush" variant="flush">
            {scores}
          </ListGroup>
        </Card>
      </CardGroup>
    </>
  );
}
export default Student;

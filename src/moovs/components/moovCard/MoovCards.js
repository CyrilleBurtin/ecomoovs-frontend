import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import "./MoovCards.css";

const MoovsCards = props => {
  console.log('props.moovList', props.moovList)
  return (
    <>
      <CardColumns>
        {props.moovList.map((e, i) => (
          <Card key={i} className="MoovCards">
            <Card.Img variant="top" src={e.img} />
            <Card.Body className="CardBody">
              <Card.Title>
                {i}. {e.name}
              </Card.Title>
              <Card.Text>{e.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{e.punchLine}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </>
  );
};

export default MoovsCards;

import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import "./MoovCards.css";

const MoovsCards = props => {

  return (
    <>
      <CardColumns>
        {props.moovList.map((e, i) => (
          <Card key={i+1} className="MoovCards">
            <Card.Img variant="top" src={e.img} />
            <Card.Body className="CardBody">
              <Card.Title>
                {i+1}. {e.name}
              </Card.Title>
              <Card.Text>{e.description}</Card.Text>
              <Card.Text>{e.location.city}</Card.Text>
              <Card.Text></Card.Text>
              <Card.Text>{e.type}</Card.Text>

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

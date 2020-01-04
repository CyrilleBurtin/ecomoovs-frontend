import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MoovList from "../../../moovs/components/moovList/MoovList";

const NextEvents= props => {
  return (
    <Container fluid>
      <Col>
        <Row style={{display:"flex", flexDirection:"column"}}>
          <p style={{ fontSize: 60, textAlign: "center", verticalAlign: 'center', fontWeight: "bolder" }}>
            Les prochains événements
          </p>
        </Row>
        <Row>
          <MoovList moovList={props.nextEvents}/>
        </Row>
      </Col>
    </Container>
  );
};
export default NextEvents;

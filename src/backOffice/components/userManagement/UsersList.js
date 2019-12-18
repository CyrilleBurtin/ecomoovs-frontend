import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ip from "../../../shared/ip/Ip";


const UsersList = (props) => {
  const {e,i} = props
  console.log(e)

 


  return (
    <Container>
      <Row>
        <Col style={{ fontWeight: "bold", fontSize: "22px" }}>
        <Col key={i} xs="6" md="3">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>User {i + 1} </Card.Title>
          <Card.Title>
            {e.firstname} {e.lastname}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{e.email}</Card.Subtitle>
          <Card.Text>{e.location.address} </Card.Text>
          <Card.Text>
            {e.location.zipcode} {e.location.city}
          </Card.Text>
          <Card.Text>{e.location.country}</Card.Text>
          <Card.Text>{e.phone}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </Col>
      </Row>

      <Row></Row>
    </Container>
  );
};

export default UsersList;

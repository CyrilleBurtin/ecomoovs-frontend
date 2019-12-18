import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ip from "../../../shared/ip/Ip";

const UsersList = props => {

  return (
    <Container>
      <Row>
        <Col style={{ fontWeight: "bold", fontSize: "22px" }}>
          <Col  xs="6" md="3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>User {props.cle + 1} </Card.Title>
                <Card.Title>
                  {props.user.firstname} {props.user.lastname}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {props.user.email}
                </Card.Subtitle>
                <Card.Text>{props.user.location.address} </Card.Text>
                <Card.Text>
                  {props.user.location.zipcode} {props.user.location.city}
                </Card.Text>
                <Card.Text>{props.user.location.country}</Card.Text>
                <Card.Text>{props.user.phone}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersList;

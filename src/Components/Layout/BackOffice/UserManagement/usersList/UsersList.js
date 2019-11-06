import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ip from "../../../../../Hoc/ip"

const UsersList = () =>{

  // const [errors, setErrors] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersList = () => {
      return fetch(`${ip}/users/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkYmZmNjFmNzIyMzI2MGYxZjRhZmY1YyIsImZpcnN0bmFtZSI6IkN5cmlsbGUiLCJsYXN0bmFtZSI6IkJ1cnRpbiIsImVtYWlsIjoiY3lyaWxsZS5idXJ0aW5AZ21haWwuY29tIiwicGhvbmUiOiIwMTAyMDMwNDA1IiwibG9jYXRpb24iOnsiYWRkcmVzcyI6IjUgYWxsw6llcyBkZXMgQ2hhbXBpZ25vbnMiLCJ6aXBjb2RlIjoiNzQwMDAiLCJjaXR5IjoiQW5uZWN5IiwiY291bnRyeSI6IkZyYW5jZSJ9LCJ2YWxpZGF0ZWQiOmZhbHNlLCJhY3RpdmUiOnRydWUsImFkbWluIjpmYWxzZX0sImlhdCI6MTU3Mjg2MTc1N30.hBPPz22R5pyMjJqrSCzKvsMQUZAT3fG4b0wLFbtAY5M`)
          .then( res =>  res.json() )
          .then( res => setUsers(res) )
          .catch( err  => console.log(err));
    }
    getUsersList();
  },[]);


  var list = users.map((e, i) =>
  <Col key={i}  xs="6" md="3">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User {i + 1} </Card.Title>
        <Card.Title>{e.firstname} {e.lastname}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{e.email}</Card.Subtitle>
        <Card.Text>{e.location.address} </Card.Text>
        <Card.Text>{e.location.zipcode} {e.location.city}</Card.Text>
        <Card.Text>{e.location.country}</Card.Text>
      <Card.Text>{e.phone}</Card.Text>
    </Card.Body>
  </Card>
  </Col>
)

  return (
    <Container>
      <Row>
        <Col style={{fontWeight:"bold", fontSize:"22px"}}>Liste des Users</Col>
      </Row>

      <Row>
        {list}
      </Row>
    </Container>
  )
}


export default UsersList;

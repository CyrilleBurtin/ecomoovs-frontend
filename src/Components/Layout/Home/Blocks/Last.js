import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import MoovCards from '../../Cards/MoovCards/MoovCards'

const Last = (props) => 

    <Container fluid>

        <p className="mt-5" style={{ fontSize: 60, textAlign: "center", fontWeight: "bolder" }}>Les dernières initiatives</p>

        <MoovCards moovList={props.last} />

        <Row className="justify-content-center">
            <Button className="rounded-0 mt-5 p-3 font-weight-bold border-0" style={{ backgroundColor: "#00e689" }}>En voir plus</Button>
        </Row>

    </Container>

export default Last

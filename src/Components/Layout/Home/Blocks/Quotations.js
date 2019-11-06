import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Quotation = (props) => 

    <Container fluid>
        <Row className="justify-content-center mt-5">
            <Col xs="12" md="6" className="p-5 text-center" style={{ backgroundColor: "#6dbbad", color: "#fff" }}>
                <p className="font-italic" style={{ fontSize: 27 }}>Mieux vaut prendre le changement par la main avant qu'il ne nous prenne par la gorge.</p>
                <p style={{ fontSize: 18 }}>Winston Churchill</p>
            </Col>
            <Col xs="12" md="6" className="p-5 text-center" style={{ backgroundColor: "#6dbbad", color: "#fff" }}>
                <p className="font-italic" style={{ fontSize: 27 }}>Chacun de nous peut apporter des changements dans la façon dont nous vivons nos vies et faire partie de la solution [au changement climatique].</p>
                <p style={{ fontSize: 18 }}>Al Gore</p>
            </Col>
        </Row>
    </Container>

export default Quotation

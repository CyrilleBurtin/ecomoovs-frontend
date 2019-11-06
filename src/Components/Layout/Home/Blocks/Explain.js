import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Explain = () => 
    
    <Container fluid style={{ color: "#fff", textAlign: "center" }}>
        <Row>
            <Col xs="12" md="4" className="p-5" style={{ backgroundColor: "#00e689" }}>
                <h3>Notre Mission</h3>
                <p>Notre mission est de promouvoir, d'encourager et de soutenir les initiatives ayant un impact positif sur notre planète. </p>
            </Col>
            <Col xs="12" md="4" className="p-5" style={{ backgroundColor: "rgb(97, 170, 147)" }}>
                <h3>Les initiatives</h3>
                <p>Soyez informé(e) des actions dans votre ville auxquelles vous pouvez participer pour modifier votre impact sur notre planète.</p>
            </Col>
            <Col xs="12" md="4" className="p-5" style={{ backgroundColor: "#6dbbad" }}>
                <h3>Les News</h3>
                <p>Découvrez les dernières actualités du développement durable et les initiatives qui vous permettent de mieux vivre.</p>
            </Col>
        </Row>
    </Container>

export default Explain
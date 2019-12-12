import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
const Help = () =>
    <Container fluid>
        <Row>
            <Col xs="12" md="5" className="p-5 text-center align-middle greens">
                <p style={{ flex: 2 }}>&nbsp;</p>
                <p className="align-middle font-weight-bold" style={{ fontSize: 45, flex: 1 }}>Nous soutenir</p>
                <p className="align-middle font-weight-bold" style={{ fontSize: 28, flex: 1 }}>Soumettre une idée, faire un don ou nous contacter ?</p>
                <Button className="align-middle rounded-0 mt-5 pt-2 pb-2 pr-5 pl-5 font-weight-bold border-0" style={{ backgroundColor: "#00e689", flex: 1 }}>C'est par ici</Button>
                <p style={{ flex: 2 }}>&nbsp;</p>
            </Col>
            <Col xs="12" md="7" className="p-0 bottom"></Col>
        </Row>
    </Container>

export default Help
